import { ThemeTypes } from "../../types/theme";

export type InputProps = {
  id?: string;
  variant?: ThemeTypes;
  type?: "text" | "password" | "email" | "number" | "search" | "tel";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const Input = ({
  id,
  variant = "primary",
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: InputProps) => {
  return (
    <input
      id={id}
      className={`input.${variant}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
