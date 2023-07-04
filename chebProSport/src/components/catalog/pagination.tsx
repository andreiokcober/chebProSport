import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationBlock = () => {
  return (
    <Pagination
      count={10}
      color='secondary'
      shape='rounded'
      sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}
    />
  );
};

export default PaginationBlock;
