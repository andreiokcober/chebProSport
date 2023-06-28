import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CatalogBlock from './catalog';

const NAV_ITEMS_LIST = ['Акции', 'Блог', 'Доставка'];

const Navigation = () => {
  return (
    <List sx={{ display: 'flex', p: '0', alignItems: 'center' }}>
      <CatalogBlock />
      {NAV_ITEMS_LIST.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText sx={{ margin: '15px 0px' }} primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
