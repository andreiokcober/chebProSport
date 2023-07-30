import React from 'react';
import { Container, Grid, Link, Typography, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useGlobalContext } from '../../store/AppStore';
import CardFavorite from './cardFavorite';

const breadcrumbs = [
  <Link underline='hover' key='1' color='inherit' href='/'>
    Главная
  </Link>,
  <Typography key='2' color='text.primary'>
    Доставка
  </Typography>,
];
const Favorite = () => {
  const { setCount } = useGlobalContext();

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
              <Box onClick={() => setCount([])}>
                <HighlightOffIcon />
              </Box>
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
          <CardFavorite />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Favorite;
