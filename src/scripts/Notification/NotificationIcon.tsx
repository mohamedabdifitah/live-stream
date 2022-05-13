import React from "react";
import "../../styles/IconNotification.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from "@mui/material/IconButton"
const IconNotification:React.FC = () => {
  return (
  <button type="button" onClick={()=> alert("hello")} className="icon-button">
    <NotificationsIcon />
    <span className="icon-button__badge">2</span>
  </button>
    )
}
export default IconNotification