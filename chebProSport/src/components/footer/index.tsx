import { Container, Grid, List, Typography, Link } from '@mui/material';
import React from 'react';
import footerImage from '../../image/footerImage.png';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth={'xl'}>
        <Grid container sx={{ padding: '20px 10px' }}>
          <Grid item xs={6} sx={{ borderRight: '1px solid black', pr: '30px' }}>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography variant='h5' sx={{ mr: '10px' }}>
                  CHEBPROSPORT
                </Typography>
                <div>
                  <img src={footerImage} alt='Footer image'></img>
                </div>
              </Grid>
              <Grid item xs={7}>
                <Typography component={'span'} sx={{ fontWeight: '500' }}>
                  O нас
                </Typography>
                <Typography
                  variant='h6'
                  component={'p'}
                  sx={{ fontWeight: '400' }}
                >
                  Почему работают с нами?
                </Typography>
                <Typography component={'p'} variant='subtitle1'>
                  Существует еще одна модель, отличающаяся от AIDA – ACCA. Если
                  AIDA заточена на эмоциональные покупки, то ACCA – помогает
                  более рационально принимать решения. Она используется для
                  продажи сложных продуктов.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: '30px' }}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Typography component={'p'} sx={{ fontWeight: '500' }}>
                  O нас
                </Typography>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Link
                    color={'textPrimary'}
                    sx={{ textDecoration: 'none', mb: '5px' }}
                    href='https://www.google.ru/'
                  >
                    Instagram
                  </Link>
                  <Link
                    color={'textPrimary'}
                    sx={{ textDecoration: 'none', mb: '5px' }}
                    href=''
                  >
                    Youtube
                  </Link>
                  <Link
                    color={'textPrimary'}
                    sx={{ textDecoration: 'none', mb: '5px' }}
                    href=''
                  >
                    Tik-tok
                  </Link>
                </List>
              </Grid>
              <Grid item>
                <Typography
                  component={'p'}
                  sx={{ fontWeight: '500', mb: '5px' }}
                >
                  Контакты
                </Typography>
                <Typography component={'span'}>
                  ООО “ChebPRSPORT” Company
                </Typography>
                <Typography>Company since 2023 </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sx={{ display: 'flex', mt: '80px' }}>
                <Typography sx={{ mr: '20px' }}>© 2023</Typography>
                <Typography>Privacy — Terms</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
