import { ThemeTypes } from "../../types/theme";
import { ChangeEvent } from "react";

export type CheckboxProps = {
  id?: string;
  variant?: ThemeTypes;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export const Checkbox = ({
  id,
  variant = "primary",
  checked = false,
  onChange = () => {},
  label = "",
}: CheckboxProps) => {
  return (
    <label className={`checkbox.${variant}`}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      {label && <span>{label}</span>}
    </label>
  );
};
