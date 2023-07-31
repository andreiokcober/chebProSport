import React from 'react';
import { Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'end' }}>
      <Input sx={{ width: '250px' }} type='search' color='secondary' />
      <SearchIcon
        sx={{
          alignItems: 'self-end',
          cursor: 'pointer',
          fontSize: '2em',
        }}
      />
    </Box>
  );
};

export default Search;
