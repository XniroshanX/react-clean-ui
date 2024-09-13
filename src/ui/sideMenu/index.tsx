import { ReactNode } from "react";

export type SideMenuProps = {
  show?: boolean;
  className?: string;
  children?: ReactNode;
};

export const SideMenu = ({
  children,
  className = "",
  show = false,
}: SideMenuProps) => {
  return (
    <>
      {show && (
        <div className={`sidemenu-container ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};
