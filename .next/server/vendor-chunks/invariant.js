"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/invariant";
exports.ids = ["vendor-chunks/invariant"];
exports.modules = {

/***/ "(ssr)/./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */ var NODE_ENV = \"development\";\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n    if (NODE_ENV !== \"production\") {\n        if (format === undefined) {\n            throw new Error(\"invariant requires an error message argument\");\n        }\n    }\n    if (!condition) {\n        var error;\n        if (format === undefined) {\n            error = new Error(\"Minified exception occurred; use the non-minified dev environment \" + \"for the full error message and additional helpful warnings.\");\n        } else {\n            var args = [\n                a,\n                b,\n                c,\n                d,\n                e,\n                f\n            ];\n            var argIndex = 0;\n            error = new Error(format.replace(/%s/g, function() {\n                return args[argIndex++];\n            }));\n            error.name = \"Invariant Violation\";\n        }\n        error.framesToPop = 1; // we don't care about invariant's own frame\n        throw error;\n    }\n};\nmodule.exports = invariant;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVEO0FBRUE7Ozs7Ozs7OztDQVNDLEdBRUQsSUFBSUEsV0FwQko7QUFzQkEsSUFBSUMsWUFBWSxTQUFTQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUM7SUFDMUQsSUFBSVQsYUFBYSxjQUFjO1FBQzdCLElBQUlHLFdBQVdPLFdBQVc7WUFDeEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxJQUFJLENBQUNULFdBQVc7UUFDZCxJQUFJVTtRQUNKLElBQUlULFdBQVdPLFdBQVc7WUFDeEJFLFFBQVEsSUFBSUQsTUFDVix1RUFDQTtRQUVKLE9BQU87WUFDTCxJQUFJRSxPQUFPO2dCQUFDVDtnQkFBR0M7Z0JBQUdDO2dCQUFHQztnQkFBR0M7Z0JBQUdDO2FBQUU7WUFDN0IsSUFBSUssV0FBVztZQUNmRixRQUFRLElBQUlELE1BQ1ZSLE9BQU9ZLE9BQU8sQ0FBQyxPQUFPO2dCQUFhLE9BQU9GLElBQUksQ0FBQ0MsV0FBVztZQUFFO1lBRTlERixNQUFNSSxJQUFJLEdBQUc7UUFDZjtRQUVBSixNQUFNSyxXQUFXLEdBQUcsR0FBRyw0Q0FBNEM7UUFDbkUsTUFBTUw7SUFDUjtBQUNGO0FBRUFNLE9BQU9DLE9BQU8sR0FBR2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FmcmEtYXBwLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanM/MWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIl0sIm5hbWVzIjpbIk5PREVfRU5WIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiZm9ybWF0IiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJlcnJvciIsImFyZ3MiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJuYW1lIiwiZnJhbWVzVG9Qb3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/invariant/invariant.js\n");

/***/ })

};
;