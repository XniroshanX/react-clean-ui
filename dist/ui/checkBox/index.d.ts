import { ThemeTypes } from "../../types/theme";
export type CheckboxProps = {
    id?: string;
    variant?: ThemeTypes;
    checked?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};
export declare const Checkbox: ({ id, variant, checked, className, onChange, label, }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map