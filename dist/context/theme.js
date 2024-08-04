"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCleanUI = exports.CleanUIProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const theme_1 = require("../data/theme");
const CleanUIContext = (0, react_1.createContext)(undefined);
const CleanUIProvider = ({ children, }) => {
    const [dark, setDark] = (0, react_1.useState)(false);
    const [themeConfiguration, setThemeConfiguration] = (0, react_1.useState)(theme_1.DefaultThemeConfiguration);
    (0, react_1.useEffect)(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    return ((0, jsx_runtime_1.jsx)(CleanUIContext.Provider, { value: { dark, setDark, themeConfiguration, setThemeConfiguration }, children: children }));
};
exports.CleanUIProvider = CleanUIProvider;
const useCleanUI = () => {
    const context = (0, react_1.useContext)(CleanUIContext);
    if (context === undefined) {
        throw new Error("useCleanUI must be used within a CleanUIProvider");
    }
    return context;
};
exports.useCleanUI = useCleanUI;
//# sourceMappingURL=theme.js.map