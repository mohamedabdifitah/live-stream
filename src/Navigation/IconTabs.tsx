import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab 
      sx={{ color:"#7d838c", 
       width:"40px"
      }} 
      icon={<PhoneIcon />} label="Recents" />
      <Tab 
      sx={{ color:"#7d838c" 
      }} 
      icon={<FavoriteIcon />} label="Home" />
     <Tab
      icon = {<AddBoxIcon />}
      />
      <Tab 
      sx={{ color:"#7d838c" 
      }}
      icon={<PersonPinIcon />} label="Activity" />
            <Tab 
      sx={{ color:"#7d838c" 
      }}
      icon={<PersonPinIcon />} label="shorts" />
    </Tabs>
  );
}
