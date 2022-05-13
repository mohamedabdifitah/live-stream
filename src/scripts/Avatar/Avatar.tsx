import React from "react";
//import Avatar from "@mui/material/Avatar"
import "../../styles/Avatar.scss";

// waa type data uu qaadanayo Avatarka 
interface IAvatar{
  isOnline:boolean | undefined,
  hasStory:boolean | undefined,
  userName:string | undefined,
  image:string | undefined,
  callback:string | undefined,
  className:string | undefined,
  isLive:boolean | undefined
}
const AvatarComp : React.FC <IAvatar> = ({isOnline,hasStory,userName,image,callback,className,isLive}) => {
  
  return (
    <div className={`avatar ${className}`}>
     <div className={hasStory?"avatar-image story":"avatar-image"}>
      <img  src={image}/>
      {/*
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
      */}
       {isOnline?
        <div className="badgeOnline"/>:""}
     </div>
     <div className="avatar-text">
      {userName}
     </div>
   
    </div>
    )
}
export default AvatarComp