import React from 'react';
import { Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'end' }}>
      <Input sx={{ maxWidth: '200px' }} type='search' color='secondary' />
      <SearchIcon
        sx={{
          alignItems: 'self-end',
          cursor: 'pointer',
          fontSize: '1.8em',
        }}
      />
    </Box>
  );
};

export default Search;
