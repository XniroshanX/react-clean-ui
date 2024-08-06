import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";

export type BoxProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const Box = ({ id, children, className = "" }: BoxProps) => {
  return (
    <div id={id} className={`${className}`}>
      {children}
    </div>
  );
};
