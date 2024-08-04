
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

export const TextArea = ({
  id,
  variant = "primary",
  placeholder = "",
  value = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  rows = 4,
  cols = 50,
}: TextAreaProps) => {

  return (
    <textarea
      id={id}
      className={`textarea.${variant}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      rows={rows}
      cols={cols}
    />
  );
};
