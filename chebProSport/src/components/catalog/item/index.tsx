import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Box,
} from '@mui/material';

import BasketBtn from './BasketBtn';
import FavoriteBtn from './FavoriteBtn';

export type CardProp = {
  item: {
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
};

const Item = (prop: CardProp) => {
  const { item } = prop;
  return (
    <Grid
      item
      xs={12}
      md={4}
      sm={6}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Card
        sx={{
          maxWidth: '245px',
          height: 'auto',
          flexGrow: '1',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '190px',
            cursor: 'pointer',
          }}
        >
          <Link
            to={`${item.categoriesSlug}/${item.id}`}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={item.image}
              alt='Catalog Card'
              style={{ paddingTop: '15px' }}
            />
          </Link>
        </Box>
        <CardContent sx={{ padding: '5px 5px 0px 10px' }}>
          <Typography
            gutterBottom
            variant='body1'
            component='span'
            sx={{ mr: '10px' }}
          >
            {item.title}
          </Typography>
          <Typography variant='body1' component={'span'} color='secondary'>
            {item.price}
          </Typography>
          <Typography
            variant='body2'
            component={'div'}
            sx={{ color: '#47B315', mt: '10px' }}
          >
            в наличии {item.score}
          </Typography>
        </CardContent>
        <CardActions>
          <BasketBtn />
          <FavoriteBtn id={item.id} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
