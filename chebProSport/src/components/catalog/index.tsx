import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Container, Grid } from '@mui/material';

import CardsContainer from './Cards';
import CatalogMenu from './CatalogMenu';
import PaginationBlock from './Pagination';

export type GlobalSortCardValue = {
  sortCard: string;
  setSortCard: Dispatch<SetStateAction<string>>;
};
export const GlobalSortCard = createContext<GlobalSortCardValue>({
  sortCard: '',
  setSortCard: () => null,
} as GlobalSortCardValue);

export const useGlobalSortCard = () => useContext(GlobalSortCard);

const Catalog = () => {
  const [sortCard, setSortCard] = useState<string>('');

  return (
    <GlobalSortCard.Provider value={{ sortCard, setSortCard }}>
      <div style={{ backgroundColor: '#F7F0F5' }}>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={3}>
              <CatalogMenu />
            </Grid>
            <Grid item xs={9}>
              <CardsContainer />
              <PaginationBlock />
            </Grid>
          </Grid>
        </Container>
      </div>
    </GlobalSortCard.Provider>
  );
};

export default Catalog;
