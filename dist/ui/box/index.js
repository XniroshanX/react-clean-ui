"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box = ({ id, children, className = "" }) => {
    return ((0, jsx_runtime_1.jsx)("div", { id: id, className: `${className}`, children: children }));
};
exports.Box = Box;
//# sourceMappingURL=index.js.map