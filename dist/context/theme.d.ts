import React, { ReactNode } from "react";
import { ThemeConfiguration } from "../types/theme";
interface CleanUIContextType {
    dark: boolean;
    setDark: (dark: boolean) => void;
    themeConfiguration: ThemeConfiguration;
    setThemeConfiguration: (themeConfiguration: ThemeConfiguration) => void;
}
export declare const CleanUIProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useCleanUI: () => CleanUIContextType;
export {};
//# sourceMappingURL=theme.d.ts.map