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
    price: string;
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
          sx={{ display: 'flex', justifyContent: 'center', height: '190px' }}
        >
          <img
            src={item.image}
            alt='Catalog Card'
            style={{ paddingTop: '15px' }}
          />
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
        </CardContent>
        <CardActions
          sx={{
            paddingTop: '2px',
            mt: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='body2'
            component={'div'}
            sx={{ color: '#47B315', mt: '10px' }}
          >
            в наличии {item.score}
          </Typography>
          <Box
            sx={{
              marginLeft: '0',
            }}
          >
            <BasketBtn />
            <FavoriteBtn />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
