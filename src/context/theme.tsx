import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface CleanUIContextType {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const CleanUIContext = createContext<CleanUIContextType | undefined>(undefined);

export const CleanUIProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <CleanUIContext.Provider value={{ dark, setDark }}>
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
