import React, { createContext, ReactNode, useContext, useState } from 'react';

export type GlobalContentType = {
  children: ReactNode;
};

export type GlobalContentValue = {
  count: Array<number>;
  setCount: (count: Array<number>) => void;
};

export const GlobalContext = createContext<GlobalContentValue>(
  {} as GlobalContentValue,
);

export const useGlobalContext = () => useContext(GlobalContext);

const AppStore = ({ children }: GlobalContentType) => {
  const [count, setCount] = useState([0]);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppStore;
