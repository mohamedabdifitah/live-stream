import React from "react";
import "../styles/stories.scss";
import AvatarComp from "../scripts/Avatar/Avatar"
const Story:React.FC = () => {
  return(
     <div className='story-container'>
     <AvatarComp isOnline={false} hasStory={true} userName={"mohamed"} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={"story"} isLive={false} />
     </div>
    )
}
export default Story