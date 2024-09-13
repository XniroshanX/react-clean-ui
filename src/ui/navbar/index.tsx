import { ReactNode } from "react";
import { Box } from "../box";

export type NavbarProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  logo: string;
};

export const Navbar = ({
  id = "container",
  children,
  className = "",
  logo,
}: NavbarProps) => {
  return (
    <Box id={id} className={`navbar-wrapper ${className}`}>
      <Box className="navbar-content">
        <Box className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Box>
        <Box className="navbar-body">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
