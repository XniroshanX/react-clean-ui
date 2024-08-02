import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";
export type ButtonProps = {
    id?: string;
    type?: ThemeTypes;
    children?: ReactNode;
    onClick?: () => void;
};
export declare const Button: ({ id, children, type, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map