"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    label: "label",
};
const Text = ({ id, children, className = "", variant = "p", onClick = () => { }, }) => {
    // Get the HTML tag from the variantMapping
    const Tag = variantMapping[variant] || "p";
    return ((0, jsx_runtime_1.jsx)(Tag, { onClick: onClick, id: id, className: `${className}`, children: children }));
};
exports.Text = Text;
//# sourceMappingURL=index.js.map