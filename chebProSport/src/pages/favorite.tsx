import React from 'react';
import {
  Container,
  Grid,
  Link,
  Typography,
  Card,
  Box,
  CardContent,
  CardActions,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import BasketBtn from '../components/catalog/item/basketBtn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CardCatalog from '../data/catalog';
import { useGlobalContext } from '../store/AppStore';

const breadcrumbs = [
  <Link underline='hover' key='1' color='inherit' href='/'>
    Главная
  </Link>,
  <Typography key='2' color='text.primary'>
    Доставка
  </Typography>,
];
const Favorite = () => {
  const { count } = useGlobalContext();

  return (
    <Container maxWidth={'md'}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sx={{ flexGrow: '1' }}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Grid>
            <Grid item sx={{ display: 'flex' }}>
              <Typography component={'p'} sx={{ mr: '5px' }}>
                Удалить товары из избранного
              </Typography>
              <HighlightOffIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'start',
            columnGap: '20px',
            flexWrap: 'wrap',
          }}
        >
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Favorite;
