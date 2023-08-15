import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon   from'@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RepeatIcon from '@mui/icons-material/Repeat';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', bgcolor: 'background.paper', width: 300, height:'100vh',backgroundColor:'black' }}>
      
      <AppBar position="static" sx={{ width: '100%' }} >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="off"
          aria-label="full width tabs example"
        >
          <Tab icon={<HomeIcon />}label="Account Name" {...a11yProps(0)} />
          <Tab icon={< ShoppingCartOutlinedIcon/>}label="Online Purchases" {...a11yProps(1)} />
          <Tab icon={<StorefrontIcon />}label="In-Store Purchases" {...a11yProps(2)} />
          <Tab icon={<RepeatIcon />}label="Buy It Again" {...a11yProps(3)} />
          <Tab icon={<LocalOfferIcon />}label="Deals & Offers" {...a11yProps(4)} />
          <Tab icon={<ListAltIcon  />}label="Shopping Lists" {...a11yProps(5)} />
          <Tab  icon={<MilitaryTechIcon />}label="Rewards" {...a11yProps(6)} />
          <Tab  icon={<ManageAccountsIcon />}label="Profile & Settings" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0} dir={theme.direction}>
          Account Name
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Online Purchases
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          In-Store Purchases
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Buy It Again
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Deals & Offers
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Shopping Lists
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Rewards
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Profile and settings
        </TabPanel>
    </Box>
  );
}
