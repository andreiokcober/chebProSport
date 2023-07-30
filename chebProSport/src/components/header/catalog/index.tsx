import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import CatalogBlock from './catalog';
import PATHS from '../../../routes/AppRoutes';

const NAV_ITEMS_LIST = [
  { name: 'Акции', path: PATHS.PROMOTIONS_PATH },
  { name: 'Доставка', path: PATHS.DELIVERY_PATH },
  { name: 'Главная', path: PATHS.BASE },
];

const Navigation = () => {
  return (
    <List sx={{ display: 'flex', p: '0', alignItems: 'center' }}>
      <CatalogBlock />
      {NAV_ITEMS_LIST.map((item) => (
        <ListItem key={item.name} disablePadding>
          <Link to={item.name === 'Главная' ? '' : item.path}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText sx={{ margin: '15px 0px' }} primary={item.name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
