export type TextTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
export type ThemeTypes = "primary" | "default" | "secondary" | "info" | "success" | "danger" | "warning";
export type ThemeConfiguration = {
    [key in ThemeTypes]: {
        dark: Theme;
        light: Theme;
    };
};
export type Theme = {
    backgroundColor: string;
    hoverBackgroundColor: string;
    color: string;
    hoverColor: string;
    borderColor: string;
    hoverBorderColor: string;
};
//# sourceMappingURL=theme.d.ts.map