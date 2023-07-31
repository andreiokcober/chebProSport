import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type GlobalContentType = {
  children: ReactNode;
};

export type FavoriteCountType = Array<number>;

export type GlobalContentValue = {
  FavoriteCount: FavoriteCountType;
  setFavoriteCount: Dispatch<SetStateAction<FavoriteCountType>>;
};

export const GlobalContext = createContext<GlobalContentValue>({
  FavoriteCount: [],
  setFavoriteCount: () => null,
} as GlobalContentValue);

export const useGlobalContext = () => useContext(GlobalContext);

const AppStore = ({ children }: GlobalContentType) => {
  const [FavoriteCount, setFavoriteCount] = useState<FavoriteCountType>([]);

  return (
    <GlobalContext.Provider value={{ FavoriteCount, setFavoriteCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppStore;
