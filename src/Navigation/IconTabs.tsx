import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
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
       width:"20px",
      }} 
      icon={<PhoneIcon />} label="Home"/>
      <Tab 
      sx={{ color:"#7d838c" 
      }} 
      icon={<FavoriteIcon />} label="Home" />
     <Tab
      icon = {<AddBoxIcon
      sx={{
       width:"60px",
       color:"#7d838c"
      }}
      />}
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

// BottomTabs
 const  BottomTabs:React.FC = () => {
   return(
      <button className="button">
       <HomeIcon />
       <p> Home </p>
      </button>
     )
 }
 
 export {BottomTabs}