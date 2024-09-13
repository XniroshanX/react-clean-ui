import { TextTypes } from "../../types/theme";
import { ReactNode } from "react";
export type TextProps = {
    id?: string;
    variant?: TextTypes;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
};
export declare const Text: ({ id, children, className, variant, onClick, }: TextProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map