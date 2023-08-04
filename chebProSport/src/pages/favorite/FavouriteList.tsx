import React, { Fragment } from 'react';
import { Card, Box, CardContent, CardActions, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useGlobalContext } from '../../store/AppStore';
import CardCatalog from '../../data/catalog';

import BasketBtn from '../../components/Catalog/Item/BasketBtn';

const FavouritList = () => {
  const { favoriteCount, setFavoriteCount } = useGlobalContext();

  const deleteCard = (id: number | undefined) => {
    const filterCount = favoriteCount.filter((item) => item !== id);
    setFavoriteCount(filterCount);
  };

  return (
    <>
      {favoriteCount.map((item) => {
        const cardObj = CardCatalog.find((card) => card.id === item);
        const id = cardObj?.id;

        return (
          <Fragment key={id}>
            <Card
              sx={{
                width: '235px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
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
              <Box
                sx={{ position: 'absolute', right: 5, top: 5 }}
                onClick={() => deleteCard(id)}
              >
                <HighlightOffIcon />
              </Box>
            </Card>
          </Fragment>
        );
      })}
    </>
  );
};

export default FavouritList;
