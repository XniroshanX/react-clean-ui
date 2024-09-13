"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SideMenu = ({ children, className = "", show = false, }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: show && ((0, jsx_runtime_1.jsx)("div", { className: `sidemenu-container ${className}`, children: children })) }));
};
exports.SideMenu = SideMenu;
//# sourceMappingURL=index.js.map