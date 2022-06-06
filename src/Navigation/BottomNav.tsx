import React from "react" ;
import "../styles/BottomNav.scss"
import {SelectUploadLive} from "./SelectUploadLive";
import {BottomTabs} from "./IconTabs"
/* 
 import all Icons for bottom Navagation Tabs 
 i'll use material icons and React-icons to look better
*/ 
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
//import {BiMessageRounded} from "react-icons/bi"
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

const Tabs = [
  {
    "Name":"Home",
    "Icon":HomeIcon,
    "url":"/"
  },
  {
    "Name":"Friends",
    "Icon":PeopleSharpIcon,
    "url":"/friends"
  },
  {
    "Name":"",
    "Icon":AddBoxIcon,
    "url":"/1234"
  },
  {
    "Name":"Activity",
    "Icon":MessageSharpIcon,
    "url":"/login"
  },
  {
    "Name":"Profile",
    "Icon":PersonSharpIcon,
    "url":"/user"
  },
  ]
const BottomNav:React.FC = () => {
  const [ SelectUplLive , setSelectUplLive] = React.useState(false)
  const handleClick = () => {
    setSelectUplLive(!SelectUplLive)
  }
  return (
     <div className="nav bottom">
     {SelectUplLive?<SelectUploadLive />:""}
     {/*Tabs.map((tab,index)=>{
     console.log(tab.Icon)
     return(
     <BottomTabs Name={tab.Name} Icon={tab.Icon} url={tab.url}/>
    ) })*/}
    <BottomTabs Name={"Home"} Icon={HomeIcon} url={"/"}/>
    <BottomTabs Name={"Friends"} Icon={PeopleSharpIcon} url={"/friends"}/>
    <button className="add__btn" onClick={()=>{
      handleClick()
    }}>
     <AddBoxIcon 
      sx={{
        width:"40px",
        height:"40px",
        position:"relative",
        top:"-8px",
        color:"white"
      }}
     />
    </button>
    <BottomTabs Name={"Inbox"} Icon={MessageSharpIcon} url={"/inbox/messages"}/>
    <BottomTabs Name={"Profile"} Icon={PersonSharpIcon} url={"/user"}/>
     </div> 
    )
}
export default BottomNav