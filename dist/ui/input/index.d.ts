import { ThemeTypes } from "../../types/theme";
export type InputProps = {
    id?: string;
    variant?: ThemeTypes;
    type?: "text" | "password" | "email" | "number" | "search" | "tel";
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
};
export declare const Input: ({ id, variant, type, className, placeholder, value, onChange, onFocus, onBlur, }: InputProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map