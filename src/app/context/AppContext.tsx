'use client';
import { createContext, useContext, useState } from "react";

type AppContextType = {
  isLampOn: boolean;
  setIsLampOn: (value: boolean) => void;
  // Add more state as needed
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLampOn, setIsLampOn] = useState(false);

  return (
    <AppContext.Provider value={{ isLampOn, setIsLampOn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
