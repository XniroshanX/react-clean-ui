import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";

export type ButtonProps = {
  id?: string;
  variant?: ThemeTypes;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  id,
  children,
  variant = "primary",
  type = "button",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`button.${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
