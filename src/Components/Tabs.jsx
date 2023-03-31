import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Mycode from '../images/newcode.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=''>
         
      <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{  fontSize:'14px', color:'white'  }}  label="Get a payment API token &nbsp; &nbsp; " {...a11yProps(0)} />
          <Tab sx={{  fontSize:'14px', color:'white' }} label="&nbsp; &nbsp; Initiate a payment" {...a11yProps(1)} />
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
 
      <p className='py-24 text-white' >INITIATE API CODE HERE</p>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p className='py-24 text-white' >INITIATE API CODE HERE</p>
   
      </TabPanel>
    

    </div>
   
  );
}