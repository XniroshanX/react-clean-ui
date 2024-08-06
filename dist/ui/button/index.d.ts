import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";
export type ButtonProps = {
    id?: string;
    variant?: ThemeTypes;
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
};
export declare const Button: ({ id, children, variant, type, className, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map