import React, { useState, MouseEvent } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

type ButtonMenuConfig = {
  name: string;
  content?: Array<string>;
};

const ButtonCatalogMenu = (prop: ButtonMenuConfig) => {
  const { name, content } = prop;

  const [openButton, setOpenButton] = useState<string>('none');

  const handleClickButton = (event: MouseEvent) => {
    const svg = event.currentTarget.querySelector('.svg-button-catalog');

    if (openButton === 'block') {
      svg ? svg.classList.remove('svg-button-catalog-show') : null;
      setOpenButton('none');
    } else {
      setOpenButton('block');
      svg ? svg.classList.add('svg-button-catalog-show') : null;
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
          >
            <path
              d='M0.962078 17.3594V0.640625L9.32145 9L0.962078 17.3594Z'
              fill='#772BD8'
            />
          </svg>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
      {content && openButton === 'block' ? (
        <>
          {content.map((item) => {
            return (
              <>
                <ListItem sx={{ padding: '0' }}>
                  <ListItemButton
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <ListItemText sx={{ marginLeft: '28px' }} primary={item} />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default ButtonCatalogMenu;
