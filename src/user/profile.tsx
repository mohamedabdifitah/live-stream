import React from "react";
import AvatarComp from "../scripts/Avatar/Avatar"
import LinkIcon from '@mui/icons-material/Link';
import {BiLink} from 'react-icons/bi'
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
           <div className="user-data">
             <h3>15 Post</h3>
             <h3>1000 followers</h3>
             <h3>100 following</h3>
           </div>
            
       </div>
       </div>


       <div className="descript">
         <h4 className="descript-content">Waxaan nahay walalo is wata.</h4>
         <div className="descript-link">
           <BiLink/>
           <h4 className="link">Description-link.</h4>
         </div>
           
       </div>
     </div>
    )
}

export default Profile