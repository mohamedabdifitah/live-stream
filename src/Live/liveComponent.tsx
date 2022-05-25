import React from "react";
import NowLive from "../scripts/live"
const LiveComponent : React.FC = () => {
  React.useEffect(()=>{
    NowLive(document.querySelector(".video"))
    window.addEventListener("load",NowLive,false)
  })
  return (
     <div className="live-video">
      <video className="video" autoPlay>
     </video>
     <div className="live-comment">
      <div className="comment live"></div>
      <div className="comment live"></div>
      <div className="comment live"></div>
      <div className="comment live"></div>
      <div className="comment live"></div>
      <div className="comment live"></div>
      <div className="comment live"></div>
     </div>
     </div>
    )
}
export default LiveComponent