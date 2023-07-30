import React from 'react';
import { Card, Box, CardContent, CardActions, Typography } from '@mui/material';

import BasketBtn from '../components/catalog/item/basketBtn';
import { useGlobalContext } from '../store/AppStore';
import CardCatalog from '../data/catalog';

const CardFavorite = () => {
  const { count } = useGlobalContext();
  return (
    <>
      {count.map((item) => {
        const cardObj = CardCatalog.find((card) => card.id === item);

        return (
          <>
            <Card
              sx={{
                maxWidth: '245px',
                height: 'auto',
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
              }}
              key={item}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '190px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={cardObj?.image}
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
                  {cardObj?.title}
                </Typography>
                <Typography
                  variant='body1'
                  component={'span'}
                  color='secondary'
                >
                  {cardObj?.price}
                </Typography>
                <Typography
                  variant='body2'
                  component={'div'}
                  sx={{ color: '#47B315', mt: '10px' }}
                >
                  в наличии {cardObj?.score}
                </Typography>
              </CardContent>
              <CardActions>
                <BasketBtn />
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default CardFavorite;
