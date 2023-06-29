import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Box,
} from '@mui/material';
import BasketBtn from './basketBtn';
import FavoriteBtn from './favoriteBtn';

type CardProp = {
  item: {
    image: string;
    title: string;
    score: number;
  };
};

const Item = (prop: CardProp) => {
  const { item } = prop;
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{ maxWidth: '245px', height: '313px' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', height: '190px' }}
        >
          <img
            src={item.image}
            alt='Catalog Card'
            style={{ paddingTop: '15px' }}
          />
        </Box>
        <CardContent sx={{ padding: '5px 5px 11px 10px' }}>
          <Typography gutterBottom variant='h6' component='span'>
            {item.title}
          </Typography>
          <Typography variant='body2' sx={{ color: '#47B315' }}>
            в наличии {item.score}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingTop: '2px' }}>
          <BasketBtn />
          <FavoriteBtn />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
