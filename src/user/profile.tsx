import React from "react";
import AvatarComp from "../scripts/Avatar/Avatar"
import LinkIcon from '@mui/icons-material/Link';
import {BiLink} from 'react-icons/bi'
import "../styles/profile.scss"
const Profile:React.FC = () => {
  return (
     <div className="user-profile">
       <div className="content">
       <div className="Avatar">
       <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={""} isLive={false} />
       </div>
       {/*
        <div className="user-name"> 
           <p className="username-text">
           mohamed abdifitah</p>
          </div>
          
          */}
       {/*
       <div className="user-content">
           <div className="user-name"> 
           <p className="username-text">
           mohamed abdifitah</p>
           <button className="follow">
              follow
            </button>
           </div>
           <div className="user-data">
             <h3>15 Post</h3>
             <h3>1000  followers</h3>
             <h3>100  following</h3>
           </div>
            
       </div>
       </div>


       <div className="descript">
         <h4 className="descript-content">Waxaan nahay walalo is wata.</h4>
         <a href="https://google.com" className="descript-link">
           <BiLink width={"30px"} height={"30px"}/>
           <h4 className="link">Description-link.</h4>
         </a>
           */}
       </div>
      
     </div>
    )
}

export default Profile