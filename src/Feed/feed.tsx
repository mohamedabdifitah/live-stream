import React from "react";
import { useSelector} from "react-redux";
import {RootState} from "../app/store";
import "../styles/feed.scss"
import ShortFeed from "./shortFeed"
//import AvatarComp from "../scripts/Avatar/Avatar"
const Feed : React.FC = () => {
  const showStory = useSelector((state:RootState) => state.showStory.value)
  return (
     <div className={showStory?"feed__with__story":"feed"}>
      <video loop autoPlay >
       <source src="" type="video/mp4">
       </source>
       </video>
     </div>
    )
}
export default Feed