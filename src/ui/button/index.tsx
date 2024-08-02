import { useCleanUI } from "../../context/theme";
import { ThemeTypes } from "../../types/theme";
import { ReactNode, useState } from "react";

export type ButtonProps = {
  id?: string;
  type?: ThemeTypes;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  id,
  children,
  type = "primary",
  onClick = () => {},
}: ButtonProps) => {
  const { dark, themeConfiguration } = useCleanUI();

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const theme = dark ? "dark" : "light";

  const backgroundColor = themeConfiguration[type][theme].backgroundColor;
  const hoverBackgroundColor =
    themeConfiguration[type][theme].hoverBackgroundColor;

  const color = themeConfiguration[type][theme].color;
  const hoverColor = themeConfiguration[type][theme].hoverColor;

  const borderColor = themeConfiguration[type][theme].color;
  const hoverBorderColor = themeConfiguration[type][theme].hoverBorderColor;

  const styles = {
    backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
    padding: "0.7rem 1.8rem",
    border: "0.1rem solid",
    borderColor: isFocused ? borderColor : hoverBorderColor,
    borderRadius: "0.4rem",
    fontSize: "1rem",
    cursor: "pointer",
    color: isHovered ? hoverColor : color,
    transition: "all 0.3s ease",
    outline: "none",
  };

  return (
    <button
      id={id}
      className={`button ${type}`}
      type="button"
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
