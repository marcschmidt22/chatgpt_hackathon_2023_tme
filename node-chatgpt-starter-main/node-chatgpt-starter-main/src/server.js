#!/usr/bin/env node
import fastify from "fastify";
import fs from "fs";
import { pathToFileURL } from "url";
import ChatGPTClient from "./ChatGPTClient.js";
import { KeyvFile } from "keyv-file";
import { InvalidOpenAIKeyError } from "./errors.js";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.length < 3) {
  throw new InvalidOpenAIKeyError(
    "Please provide OPENAI_API_KEY as environment variable or include in .env file"
  );
}

const arg = process.argv.find((arg) => arg.startsWith("--settings"));
let path;
if (arg) {
  path = arg.split("=")[1];
} else {
  path = "./settings.js";
}

let settings;
if (fs.existsSync(path)) {
  // get the full path
  const fullPath = fs.realpathSync(path);
  settings = (await import(pathToFileURL(fullPath).toString())).default;
} else {
  if (arg) {
    console.error(
      `Error: the file specified by the --settings parameter does not exist.`
    );
  } else {
    console.error(`Error: the settings.js file does not exist.`);
  }
  process.exit(1);
}

if (settings.storageFilePath && !settings.cacheOptions.store) {
  // make the directory and file if they don't exist
  const dir = settings.storageFilePath.split("/").slice(0, -1).join("/");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(settings.storageFilePath)) {
    fs.writeFileSync(settings.storageFilePath, "");
  }

  settings.cacheOptions.store = new KeyvFile({
    filename: settings.storageFilePath,
  });
}

const chatGptClient = new ChatGPTClient(
  process.env.OPENAI_API_KEY,
  settings.chatGptClient,
  settings.cacheOptions
);

const server = fastify();

server.post("/conversation", async (request, reply) => {
  console.log(JSON.stringify(request.body, null, 2));
  const conversationId = request.body.conversationId
    ? request.body.conversationId.toString()
    : undefined;

  let result;
  let error;
  try {
    const parentMessageId = request.body.parentMessageId
      ? request.body.parentMessageId.toString()
      : undefined;
    result = await chatGptClient.sendMessage(request.body.message, {
      conversationId,
      parentMessageId,
    });
    console.log(result);
  } catch (e) {
    error = e;
  }

  if (result !== undefined) {
    reply.send(result);
  } else {
    console.error(error);
    reply
      .code(503)
      .send({ error: "There was an error communicating with ChatGPT." });
  }
});

console.log(settings);
const port = settings.port || 4000;

server.listen({ port, host: "0.0.0.0" }, (error) => {
  console.log(`server starting at port: ${port}`);
  if (error) {
    console.error(error);
    process.exit(1);
  }
});
