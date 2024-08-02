"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = require("../../context/theme");
const react_1 = require("react");
const Button = ({ id, children, type = "primary", onClick = () => { }, }) => {
    const { dark, themeConfiguration } = (0, theme_1.useCleanUI)();
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const theme = dark ? "dark" : "light";
    const backgroundColor = themeConfiguration[type][theme].backgroundColor;
    const hoverBackgroundColor = themeConfiguration[type][theme].hoverBackgroundColor;
    const color = themeConfiguration[type][theme].color;
    const hoverColor = themeConfiguration[type][theme].hoverColor;
    const borderColor = themeConfiguration[type][theme].color;
    const hoverBorderColor = themeConfiguration[type][theme].hoverBorderColor;
    const styles = {
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        padding: "0.7rem 1.8rem",
        border: "0.1rem solid",
        borderColor: isFocused ? borderColor : hoverBorderColor,
        borderRadius: "0.4rem",
        fontSize: "1rem",
        cursor: "pointer",
        color: isHovered ? hoverColor : color,
        transition: "all 0.3s ease",
        outline: "none",
    };
    return ((0, jsx_runtime_1.jsx)("button", { id: id, className: `button ${type}`, type: "button", style: styles, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleFocus, onBlur: handleBlur, onClick: onClick, children: children }));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map