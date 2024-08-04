import { ThemeTypes } from "../../types/theme";
export type TextAreaProps = {
    id?: string;
    variant?: ThemeTypes;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    rows?: number;
    cols?: number;
};
export declare const TextArea: ({ id, variant, placeholder, value, onChange, onFocus, onBlur, rows, cols, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map