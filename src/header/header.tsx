import React from "react" ;
import { setShowStory } from "./StoryOnSlice";
import {useDispatch} from "react-redux";
import { useSelector} from "react-redux";
import {RootState} from "../app/store";
import "../styles/header.scss"
import IconNotification from "../scripts/Notification/NotificationIcon"
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import AvatarComp from "../scripts/Avatar/Avatar"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
//import {MdKeyboardArrowDown,MdKeyboardArrowUp} from "react-icons/md"
import Stories from "../stories/stories"
//import "../styles/IconNotification.scss"


const Header : React.FC = () => {
  const [storyOn , setStoryOn] = React.useState(false)
  const dispatch = useDispatch()
  const HandleEvent = () => {
    setStoryOn(!storyOn)
    dispatch(setShowStory(storyOn))
    //setStoryOn(false)
    
  }
  return (
     <div className="header">
     <button 
     className="left-icons"
     onClick={HandleEvent}
     >
     <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={"home header"} isLive={false} />
      {storyOn?<KeyboardArrowUpSharpIcon 
      sx={{
      color:"white",
      width:"30px",
      height:"30px",
      //left:"-5px",
      position:"relative",
      top:"22px",
      }}/> :<KeyboardArrowDownSharpIcon
         sx={{
         color:"white",
         width:"30px",
        height:"30px",
        //left:"-5px",
        position:"relative",
        top:"22px",
        }}/>
      }
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
      {/*<Stories />*/}
     </div> 
    )
}
export default Header