import { TextTypes } from "../../types/theme";
import { ReactNode } from "react";

export type TextProps = {
  id?: string;
  variant?: TextTypes;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const variantMapping: { [key in TextTypes]: keyof JSX.IntrinsicElements } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  label: "label",
};

export const Text = ({
  id,
  children,
  className = "",
  variant = "p",
  onClick = () => {},
}: TextProps) => {
  // Get the HTML tag from the variantMapping
  const Tag = variantMapping[variant] || "p";
  return (
    <Tag onClick={onClick} id={id} className={`${className}`}>
      {children}
    </Tag>
  );
};
