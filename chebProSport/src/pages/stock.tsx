import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography, Link, Container } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Item from '../components/Carousel/Item';

import img from '../image//stock/image 18.png';

const breadcrumbs = [
  <Link underline='hover' key='1' color='inherit' href='/'>
    Главная
  </Link>,
  <Typography key='2' color='text.primary'>
    Акции
  </Typography>,
];
const carouselData = [{ image: img }, { image: img }, { image: img }];

const Stock = () => {
  return (
    <Container maxWidth='md' sx={{ justifyContent: 'center', display: 'flex' }}>
      <Grid container spacing={1} sx={{ width: '80%' }}>
        <Grid item xs={12}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Carousel
            indicators={false}
            navButtonsAlwaysVisible={true}
            fullHeightHover={false}
            autoPlay={false}
            sx={{ width: '690px', justifyContent: 'center' }}
            navButtonsProps={{
              style: {
                backgroundColor: 'none',
                borderRadius: 0,
                color: '#772BD8',
                background: 'none',
              },
            }}
            navButtonsWrapperProps={{
              style: {
                bottom: '0',
                top: '',
              },
            }}
          >
            {carouselData.map((item, i) => (
              <Item {...item} key={i} />
            ))}
          </Carousel>
        </Grid>
        <Grid item>
          <Typography component={'p'} variant='h5'>
            Скидка 10% на все! До конца июня!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Stock;
