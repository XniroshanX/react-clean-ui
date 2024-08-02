export type ThemeTypes =
  | "primary"
  | "default"
  | "secondary"
  | "info"
  | "success"
  | "danger"
  | "warning";

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
