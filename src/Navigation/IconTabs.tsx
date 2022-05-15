import * as React from 'react';
import "../styles/BottomNav.scss"
/*export default function IconLabelTabs() {
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
*/
interface IBTabs{
  Name:string | null,
  Icon:React.FC,
  url:string | null
}
// BottomTabs
 const  BottomTabs:React.FC<IBTabs> = ({Name,Icon,url}) => {
   return(
      <button className="tab-1">
       <span className="charBadge">9</span>
      
       <Icon
       /*sx=
       {{
       width:"30px",
        height:"30px"
       }}
       */
       />
       <p className="BottomTabName"> {Name} </p>
      </button>
     )
 }
 
 export {BottomTabs}