import React, { createContext, ReactNode, useContext, useState } from 'react';

export type GlobalContentType = {
  children: ReactNode;
};

export type GlobalContentValue = {
  count: number;
  setCount: (count: number) => void;
};

export const GlobalContext = createContext<GlobalContentValue>(
  {} as GlobalContentValue,
);

export const useGlobalContext = () => useContext(GlobalContext);

const AppStore = ({ children }: GlobalContentType) => {
  const [count, setCount] = useState<number>(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppStore;
