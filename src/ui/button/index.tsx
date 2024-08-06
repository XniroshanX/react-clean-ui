import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";

export type ButtonProps = {
  id?: string;
  variant?: ThemeTypes;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  id,
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`button.${variant} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
