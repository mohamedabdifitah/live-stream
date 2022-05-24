import React from "react"
import "../styles/liveComponent.scss"
import NowLive from "../scripts/live"
import AvatarComp from "../scripts/Avatar/Avatar"
const Live = () => {
  React.useEffect(()=>{
    NowLive(document.querySelector(".video"))
    window.addEventListener("load",NowLive,false)
  })
  return (
    <div className="Live-component">
     <video className="video" autoPlay  style={{width:"100%",height:"100%"}}>
     </video>
      <div className="Live-Comments">
       <div className="comment">
       <AvatarComp isOnline={true} hasStory={true} userName={""} image={"https://random.imagecdn.app/500/150" } callback={"https://random.imagecdn.app/500/150"} className={"home header"} isLive={false} />
       <p> message 1</p>
       </div>
       <p> message 1</p>
       <p> message 1</p>
       <p> message 1</p>
       <p> message 1</p>
      </div>
     
    </div>
    )
}
export default Live