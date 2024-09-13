"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
const Container = ({ id = "container", children, className = "", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { id: id, className: `${className}`, children: children }));
};
exports.Container = Container;
//# sourceMappingURL=index.js.map