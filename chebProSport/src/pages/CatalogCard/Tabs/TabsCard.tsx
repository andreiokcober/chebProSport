import * as React from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

import Review from './Review';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

type TabPanelInfo = {
  description?: string;
  review?: string;
};

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = (props: TabPanelInfo) => {
  const { description } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: '#772BD8' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          textColor='secondary'
          indicatorColor='secondary'
        >
          <Tab label='Описание' {...a11yProps(0)} />
          <Tab label='Отзывы' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Review />
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
