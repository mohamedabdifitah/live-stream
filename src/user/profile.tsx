import React from "react";
import AvatarComp from "../scripts/Avatar/Avatar"
import "../styles/profile.scss"
const Profile:React.FC = () => {
  return (
     <div className="user-profile">
       <div className="content">
       <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={""} isLive={false} />
       <div className="bottons">
           <div className="user-content"> 
           <h3 className="username-text">Ar wuuw.</h3>
           <button className="follow">
              follow
            </button>
           </div>
            
       </div>
       </div>

       <div className="descript">
         <h3>Ar wuuw.</h3>
       </div>
     </div>
    )
}

export default Profile