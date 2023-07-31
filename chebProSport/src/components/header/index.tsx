import React from 'react';
import { AppBar, Container, Box, Typography, Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Navigation from './Catalog/Index';
import Search from './Search';
import IConsBlock from './Icons';
import Login from './Login';

const Header = () => {
  return (
    <AppBar color='primary' position='static'>
      <Container maxWidth='xl'>
        <Grid
          item
          xs={12}
          container
          direction='row'
          alignItems='center'
          spacing={0}
          justifyContent={'space-between'}
        >
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <LocalPhoneIcon sx={{ fontSize: '2em', mr: '5px' }} />
              </Box>
              <Box>
                <Typography>+37529 11 90 80 9</Typography>
                <Typography>+37529 12 84 82 8</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <IConsBlock />
          </Grid>
          <Grid item>
            <Login />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
