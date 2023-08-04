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
  favoriteCount: FavoriteCountType;
  setFavoriteCount: Dispatch<SetStateAction<FavoriteCountType>>;
};

export const GlobalContext = createContext<GlobalContentValue>({
  favoriteCount: [],
  setFavoriteCount: () => null,
} as GlobalContentValue);

export const useGlobalContext = () => useContext(GlobalContext);

const AppStore = ({ children }: GlobalContentType) => {
  const [favoriteCount, setFavoriteCount] = useState<FavoriteCountType>([]);

  return (
    <GlobalContext.Provider value={{ favoriteCount, setFavoriteCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppStore;
