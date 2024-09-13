import { ReactNode } from "react";
import "./styles.css";

export type ContainerProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const Container = ({
  id = "container",
  children,
  className = "",
}: ContainerProps) => {
  return (
    <div id={id} className={`${className}`}>
      {children}
    </div>
  );
};
