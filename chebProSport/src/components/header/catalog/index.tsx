import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CatalogBlock from './catalog';
import { Link } from 'react-router-dom';

const NAV_ITEMS_LIST = ['Акции', 'Доставка', 'Главная'];

const Navigation = () => {
  return (
    <List sx={{ display: 'flex', p: '0', alignItems: 'center' }}>
      <CatalogBlock />
      {NAV_ITEMS_LIST.map((item) => (
        <ListItem key={item} disablePadding>
          <Link to={item === 'Главная' ? '' : item}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText sx={{ margin: '15px 0px' }} primary={item} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
