import React from 'react';
import { Grid } from '@mui/material';

import Item from './Item/Index';

import CardCatalog from '../../data/catalog';

const CardsContainer = () => (
  <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
    {CardCatalog.map((item, i) => (
      <Item item={item} key={i}></Item>
    ))}
  </Grid>
);

export default CardsContainer;
