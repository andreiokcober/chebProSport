import React from 'react';
import { Grid } from '@mui/material';

import Item from './Item';
import CardCatalog from '../../data/catalog';

import { useGlobalSortCard } from '.';

const CardsContainer = () => {
  const { sortCard } = useGlobalSortCard();

  const CardFilterCatalog = CardCatalog.filter((item) => {
    if (sortCard === '') {
      return item;
    } else if (item.type.toLowerCase() === sortCard.toLowerCase()) {
      return item;
    }
  });

  return (
    <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
      {CardFilterCatalog.map((item, i) => (
        <Item item={item} key={i}></Item>
      ))}
    </Grid>
  );
};

export default CardsContainer;
