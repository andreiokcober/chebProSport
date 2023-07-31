import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type GlobalContentType = {
  children: ReactNode;
};

export type FavoriteCountType = Array<number>;

export type GlobalContentValue = {
  count: Array<number>;
  setCount: Dispatch<SetStateAction<FavoriteCountType>>;
};

export const GlobalContext = createContext<GlobalContentValue>(
  {
    count: [],
    setCount: () => null,
  } as GlobalContentValue,
);

export const useGlobalContext = () => useContext(GlobalContext);

const AppStore = ({ children }: GlobalContentType) => {
  const [count, setCount] = useState<FavoriteCountType>([]);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppStore;
