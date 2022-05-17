import React from "react";
import { useSelector} from "react-redux";
import {RootState} from "../app/store";
import Header from "../header/header";
import BottomNav from "../Navigation/BottomNav";
import Feed from "../Feed/feed";
import Stories from "../stories/stories";
import "../styles/HomeLayout.scss";
const HomeLayout:React.FC = () => {
  const showStory = useSelector((state:RootState) => state.showStory.value)
  return (
     <div className="home">
      <Header />
      {showStory?<Stories  />:""}
      <Feed />
      {/*<BottomNav />*/}
      
     </div>
    )
}
export default HomeLayout