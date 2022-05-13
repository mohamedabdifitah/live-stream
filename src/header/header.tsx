import React from "react" ;
import "../styles/header.scss"
import IconNotification from "../scripts/Notification/NotificationIcon"
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import AvatarComp from "../scripts/Avatar/Avatar"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//import "../styles/IconNotification.scss"
const Header : React.FC = () => {
  return (
     <div className="header">
     <button 
     className="left-icons"
     onClick={()=> alert("return as stories as callback")}
     >
     <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={"home header"} isLive={false} />
      <ChevronRightIcon 
      sx={{
      color:"white",
      width:"30px",
      height:"30px",
      position:"relative",
      top:"10px",
      }}/>
     </button>
     <div className="middle">
     </div>
     <div className="right-icons">
      {/*<IconNotification />*/}
      <IconButton
      sx={{
        color:"white",
      }}
      onClick={()=> alert("hello2")}
      >
      
      <SearchIcon />
      </IconButton>
      
      </div>
     </div> 
    )
}
export default Header