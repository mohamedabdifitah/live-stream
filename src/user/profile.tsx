import React from "react";
import AvatarComp from "../scripts/Avatar/Avatar"
import "../styles/profile.scss"
const Profile:React.FC = () => {
  return (
     <div className="user-profile">
       <div className="content">
       <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={"user profile"} isLive={false} />
       </div>

       <div className="descript"></div>
     </div>
    )
}

export default Profile