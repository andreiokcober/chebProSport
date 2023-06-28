import React, { useState, MouseEvent } from 'react';
import {
  AppBar,
  Container,
  Box,
  Button,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Fade,
  Typography,
  Input,
  Grid,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NAV_ITEMS_LIST = ['Акции', 'Блог', 'Доставка'];

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color='primary'>
      <Container maxWidth='lg'>
        <Grid
          item
          xs={12}
          container
          direction='row'
          alignItems='center'
          spacing={0}
          justifyContent={'space-between'}
        >
          <Grid flexDirection='row' item>
            <List sx={{ display: 'flex', p: '0' }}>
              <Button
                sx={{ color: 'black' }}
                id='fade-button'
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Каталог
              </Button>
              <Menu
                id='fade-menu'
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Протеин</MenuItem>
                <MenuItem onClick={handleClose}>Креатин</MenuItem>
                <MenuItem onClick={handleClose}>Гейнеры</MenuItem>
                <MenuItem onClick={handleClose}>Аминокислоты</MenuItem>
              </Menu>
              {NAV_ITEMS_LIST.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText sx={{ margin: '15px 0px' }} primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
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
          <Grid item sx={{ display: 'flex', alignItems: 'end' }}>
            <Input sx={{ width: '250px' }} type='search' />
            <SearchIcon
              sx={{
                alignItems: 'self-end',
                cursor: 'pointer',
                fontSize: '2em',
              }}
            />
          </Grid>
          <Grid item>
            <FavoriteIcon color='primary' sx={{ fontSize: '2em' }} />
            <PersonIcon color='primary' sx={{ fontSize: '2em' }} />
            <ShoppingBasketIcon color='primary' sx={{ fontSize: '2em' }} />
          </Grid>
          <Grid item>
            <Button color='secondary' variant='contained'>
              <LoginIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
