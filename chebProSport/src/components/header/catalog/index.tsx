import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import CatalogBlock from './catalog';
import PATHS from '../../../routes/AppRoutes';

const NAV_ITEMS_LIST = [
  { name: 'Акции', path: PATHS.PROMOTIONS_PATH },
  { name: 'Доставка', path: PATHS.DELIVERY_PATH },
];

const Navigation = () => {
  return (
    <List sx={{ display: 'flex', p: '0', alignItems: 'center' }}>
      <Link to={PATHS.BASE}>
        <Typography variant='h5'>ChebPROsport.BY</Typography>
      </Link>
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
