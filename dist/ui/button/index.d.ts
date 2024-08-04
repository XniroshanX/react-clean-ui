import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";
export type ButtonProps = {
    id?: string;
    variant?: ThemeTypes;
    type?: "button" | "submit" | "reset";
    children?: ReactNode;
    onClick?: () => void;
};
export declare const Button: ({ id, children, variant, type, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map