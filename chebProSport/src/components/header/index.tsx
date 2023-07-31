import React from 'react';
import { AppBar, Box, Typography, Grid, Toolbar, styled } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Navigation from './catalog';
import Search from './search';
import IConsBlock from './icons';
import Login from './login';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Header = () => {
  return (
    <>
      <AppBar color='primary' position='fixed'>
        <Toolbar>
          <Grid
            item
            xs={12}
            container
            alignItems='center'
            spacing={2}
            justifyContent={'space-around'}
          >
            <Grid item>
              <Navigation />
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <LocalPhoneIcon sx={{ fontSize: '1.5em', mr: '5px' }} />
                </Box>
                <Box>
                  <Typography variant='body2'>+37529 11 90 80 9</Typography>
                  <Typography variant='body2'>+37529 12 84 82 8</Typography>
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
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
