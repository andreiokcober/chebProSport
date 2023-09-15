import React from 'react';
import { Box } from '@mui/material';

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: '100px' }}>
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '3px dashed #772BD8',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
    </Box>
  );
};

export default Loading;
