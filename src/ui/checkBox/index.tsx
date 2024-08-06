import { ThemeTypes } from "../../types/theme";
import { ChangeEvent } from "react";

export type CheckboxProps = {
  id?: string;
  variant?: ThemeTypes;
  checked?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export const Checkbox = ({
  id,
  variant = "primary",
  checked = false,
  className = "",
  onChange = () => {},
  label = "",
}: CheckboxProps) => {
  return (
    <label className={`checkbox.${variant} ${className}`}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      {label && <span>{label}</span>}
    </label>
  );
};
