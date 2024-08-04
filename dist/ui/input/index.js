"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Input = ({ id, variant = "primary", type = "text", placeholder = "", value = "", onChange = () => { }, onFocus = () => { }, onBlur = () => { }, }) => {
    return ((0, jsx_runtime_1.jsx)("input", { id: id, className: `input.${variant}`, type: type, placeholder: placeholder, value: value, onChange: onChange, onFocus: onFocus, onBlur: onBlur }));
};
exports.Input = Input;
//# sourceMappingURL=index.js.map