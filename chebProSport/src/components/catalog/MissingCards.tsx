import React from 'react';
import { Box, Typography } from '@mui/material';

const MissingCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        mt: '20px',
      }}
    >
      <Typography variant='body1'>Отсутствуют товары в наличии</Typography>
    </Box>
  );
};

export default MissingCards;
