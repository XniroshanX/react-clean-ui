"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextArea = ({ id, variant = "primary", placeholder = "", value = "", onChange = () => { }, onFocus = () => { }, onBlur = () => { }, rows = 4, cols = 50, }) => {
    return ((0, jsx_runtime_1.jsx)("textarea", { id: id, className: `textarea.${variant}`, placeholder: placeholder, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur, rows: rows, cols: cols }));
};
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map