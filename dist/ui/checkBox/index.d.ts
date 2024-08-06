import { ThemeTypes } from "../../types/theme";
import { ChangeEvent } from "react";
export type CheckboxProps = {
    id?: string;
    variant?: ThemeTypes;
    checked?: boolean;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};
export declare const Checkbox: ({ id, variant, checked, className, onChange, label, }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map