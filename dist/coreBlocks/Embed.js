"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_player_1 = require("react-player");
function Embed(_a) {
    var block = _a.block, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: className }, { children: (0, jsx_runtime_1.jsx)(react_player_1.default, { url: block.data.attrs.url, width: "100%" }) })));
}
exports.default = Embed;
