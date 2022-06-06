import React from "react";
import { useSelector} from "react-redux";
import {RootState} from "../app/store";
import "../styles/feed.scss"
import ShortFeed from "./shortFeed"
import FeedSugg from "./feedSugg"
import axios from "axios"
//import AvatarComp from "../scripts/Avatar/Avatar"

const Feed : React.FC = () => {
  const showStory = useSelector((state:RootState) => state.showStory.value)
  var data:Array<string> = []
  React.useEffect(()=>{
    const res = FeedSugg()
    res.then((Respond) => {
      data.push(Respond.data.id)
    })
  },[])
  return (
     <div className={showStory?"feed__with__story":"feed"}>
     <ShortFeed />
     <ShortFeed />
     <ShortFeed />
     <ShortFeed />
     </div>
    )
}
export default Feed