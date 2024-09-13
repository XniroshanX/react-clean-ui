"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const box_1 = require("../box");
const Navbar = ({ id = "container", children, className = "", logo, }) => {
    return ((0, jsx_runtime_1.jsx)(box_1.Box, { id: id, className: `navbar-wrapper ${className}`, children: (0, jsx_runtime_1.jsxs)(box_1.Box, { className: "navbar-content", children: [(0, jsx_runtime_1.jsx)(box_1.Box, { className: "logo", children: (0, jsx_runtime_1.jsx)("img", { src: logo, alt: "Logo", className: "logo-img" }) }), (0, jsx_runtime_1.jsx)(box_1.Box, { className: "navbar-body", children: children })] }) }));
};
exports.Navbar = Navbar;
//# sourceMappingURL=index.js.map