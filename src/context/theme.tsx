import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ThemeConfiguration } from "../types/theme";
import { DefaultThemeConfiguration } from "../data/theme";

interface CleanUIContextType {
  dark: boolean;
  setDark: (dark: boolean) => void;
  themeConfiguration: ThemeConfiguration;
  setThemeConfiguration: (themeConfiguration: ThemeConfiguration) => void;
}

const CleanUIContext = createContext<CleanUIContextType | undefined>(undefined);

export const CleanUIProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(false);
  const [themeConfiguration, setThemeConfiguration] =
    useState<ThemeConfiguration>(DefaultThemeConfiguration);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <CleanUIContext.Provider
      value={{ dark, setDark, themeConfiguration, setThemeConfiguration }}
    >
      {children}
    </CleanUIContext.Provider>
  );
};

export const useCleanUI = (): CleanUIContextType => {
  const context = useContext(CleanUIContext);
  if (context === undefined) {
    throw new Error("useCleanUI must be used within a CleanUIProvider");
  }
  return context;
};
