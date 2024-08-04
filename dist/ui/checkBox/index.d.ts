import { ThemeTypes } from "../../types/theme";
import { ChangeEvent } from "react";
export type CheckboxProps = {
    id?: string;
    variant?: ThemeTypes;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};
export declare const Checkbox: ({ id, variant, checked, onChange, label, }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map