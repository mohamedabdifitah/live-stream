import React from "react" ;
import "../styles/BottomNav.scss"
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
    "url":"/"
  },
  {
    "Name":"",
    "Icon":AddBoxIcon,
    "url":"/"
  },
  {
    "Name":"Activity",
    "Icon":MessageSharpIcon,
    "url":"/"
  },
  {
    "Name":"Profile",
    "Icon":PersonSharpIcon,
    "url":"/"
  },
  ]
const BottomNav:React.FC = () => {
  return (
     <div className="nav bottom">
     {Tabs.map((tab,index)=>{
     console.log(tab.Icon)
     return(
     <BottomTabs Name={tab.Name} Icon={tab.Icon} url={tab.url}/>
    ) })}
     </div> 
    )
}
export default BottomNav