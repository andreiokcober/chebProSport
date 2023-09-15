import React from 'react';
import { Grid } from '@mui/material';

import Item from '../Item';
import MissingCards from './MissingCards';

import { useGlobalSortCard } from '..';

type ProductConfig = {
  id: number;
  image: string;
  title: string;
  score: number;
  price: string;
  categories: string;
  categoriesSlug?: string;
  production: string;
  type: string;
  weight: string;
  description?: string;
};

type ProductConfigList = {
  product: ProductConfig[];
};

const CardsList: React.FC<ProductConfigList> = ({ product }) => {
  const { sortCard } = useGlobalSortCard();
  const cardFilterCatalog = product.filter((item) => {
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

export default CardsList;
