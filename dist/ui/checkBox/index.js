"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Checkbox = ({ id, variant = "primary", checked = false, onChange = () => { }, label = "", }) => {
    return ((0, jsx_runtime_1.jsxs)("label", { className: `checkbox.${variant}`, children: [(0, jsx_runtime_1.jsx)("input", { id: id, type: "checkbox", checked: checked, onChange: onChange }), label && (0, jsx_runtime_1.jsx)("span", { children: label })] }));
};
exports.Checkbox = Checkbox;
//# sourceMappingURL=index.js.map