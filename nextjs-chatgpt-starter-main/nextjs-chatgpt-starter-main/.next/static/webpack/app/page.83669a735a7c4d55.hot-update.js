"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/messagesContext.js */ \"(app-client)/./context/messagesContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CenteredBackground, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__.MessagesProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatRoom, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Page;\nfunction ChatRoom() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                text: \"SPOT AI Chat\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageHistory, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageInput, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ChatRoom;\nfunction OutboundMessage(param) {\n    let { text , mins_ago  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full mt-2 space-x-3 max-w-xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 h-10 w-10 rounded-full bg-purple-800\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-purple-800 p-3 rounded-r-lg rounded-bl-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-white\",\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xs text-gray-500 leading-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c2 = OutboundMessage;\nfunction InboundMessage(param) {\n    let { text , mins_ago  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-green-500 text-white p-3 rounded-l-lg rounded-br-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm\",\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xs text-gray-500 leading-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c3 = InboundMessage;\nfunction MessageHistory() {\n    _s();\n    const messageHistory = (0,_context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__.useMessages)();\n    // TODO: capture timestamps\n    const mins_ago = 2;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-grow h-0 p-4 overflow-auto\",\n        children: messageHistory.map((message)=>{\n            return message.messageType == \"outbound\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InboundMessage, {\n                id: message.messageId,\n                text: message.messageText,\n                mins_ago: mins_ago\n            }, message.messageId, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OutboundMessage, {\n                id: message.messageId,\n                text: message.messageText,\n                mins_ago: mins_ago\n            }, message.messageId, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(MessageHistory, \"LzoEzY5wJlQj8iSzeIKlky779w0=\", false, function() {\n    return [\n        _context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__.useMessages\n    ];\n});\n_c4 = MessageHistory;\n// https://nextjs.org/docs/guides/building-forms\nfunction MessageInput() {\n    _s1();\n    const messageDispatch = (0,_context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__.useMessagesDispatch)();\n    const [typedMessage, setTypedMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [parentMessageId, setParentMessageId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const messageText = event.target.message.value;\n        const messageId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        // dispatch a new outbound message to the MessageContext\n        messageDispatch({\n            type: \"add\",\n            messageId: messageId,\n            messageText: messageText,\n            messageType: \"outbound\"\n        });\n        // reset input box\n        setTypedMessage(\"\");\n        // send a request to ChatGPT API\n        const gptReply = await sendGPTrequest(messageText, \"placeholder-conversation-id\", parentMessageId);\n        // dispatch a new inbound message to the MessageContext\n        if (gptReply.response) {\n            messageDispatch({\n                type: \"add\",\n                messageId: gptReply.messageId,\n                messageText: gptReply.response,\n                messageType: \"inbound\"\n            });\n            // keep track of the latest message ID. This allows ChatGPT to remember the chat history\n            setParentMessageId(gptReply.messageId || null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-300 p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"flex items-center h-10 w-full rounded px-3 text-sm\",\n                type: \"text\",\n                id: \"message\",\n                name: \"message\",\n                required: true,\n                minLength: \"5\",\n                maxLength: \"200\",\n                placeholder: \"Type your message…\",\n                value: typedMessage,\n                onChange: (event)=>setTypedMessage(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n            lineNumber: 131,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this);\n}\n_s1(MessageInput, \"tV4eBH8Z7d7uqe5WBV4aQvPEMt4=\", false, function() {\n    return [\n        _context_messagesContext_js__WEBPACK_IMPORTED_MODULE_1__.useMessagesDispatch\n    ];\n});\n_c5 = MessageInput;\nfunction CenteredBackground(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_c6 = CenteredBackground;\nfunction Title(param) {\n    let { text  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-300 p-4 rounded\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"flex text-md px-3 justify-center\",\n            children: text\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n            lineNumber: 160,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\t929871\\\\Documents\\\\GitHub\\\\chatgpt_hackathon_2023_tme\\\\nextjs-chatgpt-starter-main\\\\nextjs-chatgpt-starter-main\\\\app\\\\page.js\",\n        lineNumber: 159,\n        columnNumber: 5\n    }, this);\n}\n_c7 = Title;\nasync function sendGPTrequest(message, conversationId, parentMessageId) {\n    const bodyJSON = JSON.stringify({\n        message,\n        conversationId,\n        parentMessageId\n    });\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: bodyJSON\n    };\n    // this sends the requests to our local Next.js server at $BASE_URL/api/chatgpt\n    // TODO: check for failure (status code)\n    const endpoint = \"/api/chatgpt\";\n    const response = await fetch(endpoint, options);\n    const result = await response.json();\n    console.log(\"Response from ChatGPT API: \".concat(result));\n    return {\n        response: result.response,\n        conversationId: result.conversationId,\n        messageId: result.messageId\n    };\n}\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"ChatRoom\");\n$RefreshReg$(_c2, \"OutboundMessage\");\n$RefreshReg$(_c3, \"InboundMessage\");\n$RefreshReg$(_c4, \"MessageHistory\");\n$RefreshReg$(_c5, \"MessageInput\");\n$RefreshReg$(_c6, \"CenteredBackground\");\n$RefreshReg$(_c7, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNcUIsTUFBTUQsVUFBVUo7SUFDdkMsTUFBTU0sU0FBUyxNQUFNdEIsU0FBU3VCLElBQUk7SUFFbENDLFFBQVFDLEdBQUcsQ0FBQyw4QkFBcUMsT0FBUEg7SUFDMUMsT0FBTztRQUNMdEIsVUFBVXNCLE9BQU90QixRQUFRO1FBQ3pCWSxnQkFBZ0JVLE9BQU9WLGNBQWM7UUFDckMzQixXQUFXcUMsT0FBT3JDLFNBQVM7SUFDN0I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQge1xyXG4gIE1lc3NhZ2VzUHJvdmlkZXIsXHJcbiAgdXNlTWVzc2FnZXMsXHJcbiAgdXNlTWVzc2FnZXNEaXNwYXRjaCxcclxufSBmcm9tIFwiLi4vY29udGV4dC9tZXNzYWdlc0NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDZW50ZXJlZEJhY2tncm91bmQ+XHJcbiAgICAgIDxNZXNzYWdlc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxDaGF0Um9vbSAvPlxyXG4gICAgICA8L01lc3NhZ2VzUHJvdmlkZXI+XHJcbiAgICA8L0NlbnRlcmVkQmFja2dyb3VuZD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGF0Um9vbSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyB3LWZ1bGwgbWF4LXcteGwgYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxUaXRsZSB0ZXh0PVwiU1BPVCBBSSBDaGF0XCIgLz5cclxuICAgICAgPE1lc3NhZ2VIaXN0b3J5IC8+XHJcbiAgICAgIDxNZXNzYWdlSW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE91dGJvdW5kTWVzc2FnZSh7IHRleHQsIG1pbnNfYWdvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtdC0yIHNwYWNlLXgtMyBtYXgtdy14c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBiZy1wdXJwbGUtODAwXCI+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtODAwIHAtMyByb3VuZGVkLXItbGcgcm91bmRlZC1ibC1sZ1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlXCI+e3RleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBsZWFkaW5nLW5vbmVcIj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5ib3VuZE1lc3NhZ2UoeyB0ZXh0LCBtaW5zX2FnbyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbXQtMiBzcGFjZS14LTMgbWF4LXcteHMgbWwtYXV0byBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtbC1sZyByb3VuZGVkLWJyLWxnXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e3RleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBsZWFkaW5nLW5vbmVcIj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTMwMFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUhpc3RvcnkoKSB7XHJcbiAgY29uc3QgbWVzc2FnZUhpc3RvcnkgPSB1c2VNZXNzYWdlcygpO1xyXG4gIC8vIFRPRE86IGNhcHR1cmUgdGltZXN0YW1wc1xyXG4gIGNvbnN0IG1pbnNfYWdvID0gMjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBoLTAgcC00IG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAge21lc3NhZ2VIaXN0b3J5Lm1hcCgobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLm1lc3NhZ2VUeXBlID09IFwib3V0Ym91bmRcIiA/IChcclxuICAgICAgICAgIDxJbmJvdW5kTWVzc2FnZVxyXG4gICAgICAgICAgICBpZD17bWVzc2FnZS5tZXNzYWdlSWR9XHJcbiAgICAgICAgICAgIGtleT17bWVzc2FnZS5tZXNzYWdlSWR9XHJcbiAgICAgICAgICAgIHRleHQ9e21lc3NhZ2UubWVzc2FnZVRleHR9XHJcbiAgICAgICAgICAgIG1pbnNfYWdvPXttaW5zX2Fnb31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxPdXRib3VuZE1lc3NhZ2VcclxuICAgICAgICAgICAgaWQ9e21lc3NhZ2UubWVzc2FnZUlkfVxyXG4gICAgICAgICAgICBrZXk9e21lc3NhZ2UubWVzc2FnZUlkfVxyXG4gICAgICAgICAgICB0ZXh0PXttZXNzYWdlLm1lc3NhZ2VUZXh0fVxyXG4gICAgICAgICAgICBtaW5zX2Fnbz17bWluc19hZ299XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvZ3VpZGVzL2J1aWxkaW5nLWZvcm1zXHJcbmZ1bmN0aW9uIE1lc3NhZ2VJbnB1dCgpIHtcclxuICBjb25zdCBtZXNzYWdlRGlzcGF0Y2ggPSB1c2VNZXNzYWdlc0Rpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3R5cGVkTWVzc2FnZSwgc2V0VHlwZWRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXJlbnRNZXNzYWdlSWQsIHNldFBhcmVudE1lc3NhZ2VJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBldmVudC50YXJnZXQubWVzc2FnZS52YWx1ZTtcclxuICAgIGNvbnN0IG1lc3NhZ2VJZCA9IHV1aWR2NCgpO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIGEgbmV3IG91dGJvdW5kIG1lc3NhZ2UgdG8gdGhlIE1lc3NhZ2VDb250ZXh0XHJcbiAgICBtZXNzYWdlRGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2VJZCxcclxuICAgICAgbWVzc2FnZVRleHQ6IG1lc3NhZ2VUZXh0LFxyXG4gICAgICBtZXNzYWdlVHlwZTogXCJvdXRib3VuZFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVzZXQgaW5wdXQgYm94XHJcbiAgICBzZXRUeXBlZE1lc3NhZ2UoXCJcIik7XHJcblxyXG4gICAgLy8gc2VuZCBhIHJlcXVlc3QgdG8gQ2hhdEdQVCBBUElcclxuICAgIGNvbnN0IGdwdFJlcGx5ID0gYXdhaXQgc2VuZEdQVHJlcXVlc3QoXHJcbiAgICAgIG1lc3NhZ2VUZXh0LFxyXG4gICAgICBcInBsYWNlaG9sZGVyLWNvbnZlcnNhdGlvbi1pZFwiLFxyXG4gICAgICBwYXJlbnRNZXNzYWdlSWRcclxuICAgICk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2ggYSBuZXcgaW5ib3VuZCBtZXNzYWdlIHRvIHRoZSBNZXNzYWdlQ29udGV4dFxyXG4gICAgaWYgKGdwdFJlcGx5LnJlc3BvbnNlKSB7XHJcbiAgICAgIG1lc3NhZ2VEaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICBtZXNzYWdlSWQ6IGdwdFJlcGx5Lm1lc3NhZ2VJZCxcclxuICAgICAgICBtZXNzYWdlVGV4dDogZ3B0UmVwbHkucmVzcG9uc2UsXHJcbiAgICAgICAgbWVzc2FnZVR5cGU6IFwiaW5ib3VuZFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbGF0ZXN0IG1lc3NhZ2UgSUQuIFRoaXMgYWxsb3dzIENoYXRHUFQgdG8gcmVtZW1iZXIgdGhlIGNoYXQgaGlzdG9yeVxyXG4gICAgICBzZXRQYXJlbnRNZXNzYWdlSWQoZ3B0UmVwbHkubWVzc2FnZUlkIHx8IG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtMTAgdy1mdWxsIHJvdW5kZWQgcHgtMyB0ZXh0LXNtXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICBtYXhMZW5ndGg9XCIyMDBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZeKAplwiXHJcbiAgICAgICAgICB2YWx1ZT17dHlwZWRNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VHlwZWRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2VudGVyZWRCYWNrZ3JvdW5kKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctc2NyZWVuIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktODAwIHAtMTBcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGl0bGUoeyB0ZXh0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTQgcm91bmRlZFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LW1kIHB4LTMganVzdGlmeS1jZW50ZXJcIj57dGV4dH08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZEdQVHJlcXVlc3QobWVzc2FnZSwgY29udmVyc2F0aW9uSWQsIHBhcmVudE1lc3NhZ2VJZCkge1xyXG4gIGNvbnN0IGJvZHlKU09OID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgbWVzc2FnZSxcclxuICAgIGNvbnZlcnNhdGlvbklkLFxyXG4gICAgcGFyZW50TWVzc2FnZUlkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogYm9keUpTT04sXHJcbiAgfTtcclxuXHJcbiAgLy8gdGhpcyBzZW5kcyB0aGUgcmVxdWVzdHMgdG8gb3VyIGxvY2FsIE5leHQuanMgc2VydmVyIGF0ICRCQVNFX1VSTC9hcGkvY2hhdGdwdFxyXG4gIC8vIFRPRE86IGNoZWNrIGZvciBmYWlsdXJlIChzdGF0dXMgY29kZSlcclxuICBjb25zdCBlbmRwb2ludCA9IFwiL2FwaS9jaGF0Z3B0XCI7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhgUmVzcG9uc2UgZnJvbSBDaGF0R1BUIEFQSTogJHtyZXN1bHR9YCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3BvbnNlOiByZXN1bHQucmVzcG9uc2UsXHJcbiAgICBjb252ZXJzYXRpb25JZDogcmVzdWx0LmNvbnZlcnNhdGlvbklkLFxyXG4gICAgbWVzc2FnZUlkOiByZXN1bHQubWVzc2FnZUlkLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwiTWVzc2FnZXNQcm92aWRlciIsInVzZU1lc3NhZ2VzIiwidXNlTWVzc2FnZXNEaXNwYXRjaCIsInVzZVN0YXRlIiwiUGFnZSIsIkNlbnRlcmVkQmFja2dyb3VuZCIsIkNoYXRSb29tIiwiZGl2IiwiY2xhc3NOYW1lIiwiVGl0bGUiLCJ0ZXh0IiwiTWVzc2FnZUhpc3RvcnkiLCJNZXNzYWdlSW5wdXQiLCJPdXRib3VuZE1lc3NhZ2UiLCJtaW5zX2FnbyIsInAiLCJzcGFuIiwiSW5ib3VuZE1lc3NhZ2UiLCJtZXNzYWdlSGlzdG9yeSIsIm1hcCIsIm1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsImlkIiwibWVzc2FnZUlkIiwibWVzc2FnZVRleHQiLCJtZXNzYWdlRGlzcGF0Y2giLCJ0eXBlZE1lc3NhZ2UiLCJzZXRUeXBlZE1lc3NhZ2UiLCJwYXJlbnRNZXNzYWdlSWQiLCJzZXRQYXJlbnRNZXNzYWdlSWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiZ3B0UmVwbHkiLCJzZW5kR1BUcmVxdWVzdCIsInJlc3BvbnNlIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJuYW1lIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY2hpbGRyZW4iLCJoMSIsImNvbnZlcnNhdGlvbklkIiwiYm9keUpTT04iLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiZW5kcG9pbnQiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});