import React from 'react';
import { Grid } from '@mui/material';

import Item from './Item';
import MissingCards from './MissingCards';
import CardCatalog from '../../data/catalog';

import { useGlobalSortCard } from '.';

const CardsContainer = () => {
  const { sortCard } = useGlobalSortCard();

  const cardFilterCatalog = CardCatalog.filter((item) => {
    const findItem = sortCard
      ? item.type.toLowerCase() === sortCard.toLowerCase()
      : item;
    return findItem;
  });

  return (
    <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
      {cardFilterCatalog.length !== 0 &&
        cardFilterCatalog.map((item, i) => <Item item={item} key={i} />)}
      {cardFilterCatalog.length === 0 && <MissingCards />}
    </Grid>
  );
};

export default CardsContainer;
