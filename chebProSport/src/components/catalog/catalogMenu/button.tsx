import React, { useState, useRef } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

import { useGlobalSortCard } from '..';

type ButtonMenuConfig = {
  name: string;
  content?: Array<string>;
};

const ButtonCatalogMenu = (prop: ButtonMenuConfig) => {
  const { setSortCard } = useGlobalSortCard();

  const { name, content } = prop;
  const [openButton, setOpenButton] = useState<boolean>(false);
  const svg = useRef<SVGSVGElement | null>(null);

  const handleClickButton = () => {
    if (openButton) {
      svg.current?.classList.remove('svg-button-catalog-show');
      setOpenButton(false);
    } else {
      setOpenButton(true);
      svg.current?.classList.add('svg-button-catalog-show');
    }
  };

  return (
    <>
      <ListItem sx={{ padding: '0' }} onClick={handleClickButton}>
        <ListItemButton
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <svg
            width='10'
            height='18'
            viewBox='0 0 10 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ marginRight: '10px' }}
            className='svg-button-catalog'
            ref={svg}
          >
            <path
              d='M0.962078 17.3594V0.640625L9.32145 9L0.962078 17.3594Z'
              fill='#772BD8'
            />
          </svg>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
      {content &&
        openButton &&
        content.map((item) => {
          return (
            <ListItem key={item} sx={{ padding: '0' }}>
              <ListItemButton
                onClick={() => setSortCard(item)}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ListItemText sx={{ marginLeft: '28px' }} primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </>
  );
};

export default ButtonCatalogMenu;
