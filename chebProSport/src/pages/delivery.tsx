import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import img from '../image/delivery/image 16.png';

const breadcrumbs = [
  <Link underline='hover' key='1' color='inherit' href='/'>
    Главная
  </Link>,
  <Typography key='2' color='text.primary'>
    Доставка
  </Typography>,
];

const Delivery = () => {
  return (
    <Container maxWidth='md'>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={7}>
              <img src={img} alt='Delivery image' />
            </Grid>
            <Grid item xs={5}>
              <Typography component={'p'} sx={{ mb: '10px' }}>
                Доставим товар до любой точки до 2-часов после подтверждения
                заказа.
              </Typography>
              <Typography component={'p'} sx={{ mb: '10px' }}>
                Доставка по Минску от 100 руб. - бесплатно.
              </Typography>
              <Typography component={'p'} sx={{ mb: '10px' }}>
                Если стоимость заказа до 100 руб., то доставка по Минску - 5
                руб.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography component={'p'}>
            Остались вопросы? Звоните по телефонам{' '}
            <Link
              href='tel:+375 29 11 90 80 9'
              underline={'always'}
              color={'secondary'}
            >
              +375 29 119 08 09
            </Link>{' '}
            <span> и </span>
            <Link
              href='tel:+375 29 897 23 25'
              underline={'always'}
              color={'secondary'}
            >
              +375 29 897 23 25
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Delivery;
