import React, { useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem, Fade } from '@mui/material';

const CatalogBlock = () => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const NAV_ITEMS_CATALOG = ['Протеин', 'Креатин', 'Гейнеры', 'Аминокислоты'];
  return (
    <div>
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
        {NAV_ITEMS_CATALOG.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CatalogBlock;
