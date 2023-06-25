import * as React from 'react'
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
} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import LoginIcon from '@mui/icons-material/Login'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const theme = createTheme({
  palette: {
    header: {
      main: '#FFFFFF',
    },
    mainColor: {
      main: '#772BD8',
    },
  },
})
const navItems = ['Акции', 'Блог', 'Доставка']

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar theme={theme} color='header'>
      <Container maxWidth='1280px'>
        <Grid
          xs={12}
          container
          direction='row'
          alignItems='center'
          spacing={0}
          justifyContent={'space-between'}
        >
          <Grid flexDirection='row'>
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
              {navItems.map((item) => (
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
            <Input sx={{ width: '250px' }} type='search'></Input>
            <SearchIcon sx={{ alignItems: 'self-end', cursor: 'pointer', fontSize: '2em' }} />
          </Grid>
          <Grid item>
            <FavoriteIcon theme={theme} color='mainColor' sx={{ fontSize: '2em' }} />
            <PersonIcon theme={theme} color='mainColor' sx={{ fontSize: '2em' }} />
            <ShoppingBasketIcon theme={theme} color='mainColor' sx={{ fontSize: '2em' }} />
          </Grid>
          <Grid item>
            <Button theme={theme} color='mainColor' variant='contained'>
              <LoginIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
export default Header
