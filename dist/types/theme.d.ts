export type ThemeTypes = "primary" | "default" | "secondary" | "success" | "danger" | "warning";
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