import React from "react";
import "../styles/livebadge.scss"

interface ILiveBadge{
  cls:string |undefined,
}
const LiveBadge : React.FC<ILiveBadge> = ({cls}) => {
  return(
     <div className="badge">
       <div className="badge-wrap">
        <span className="badge-icon"><svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 2.333c2.577 0 4.667 2.09 4.667 4.667S9.577 11.667 7 11.667 2.333 9.577 2.333 7 4.423 2.333 7 2.333zm0 1.05c-1.997 0-3.617 1.62-3.617 3.617 0 1.997 1.62 3.617 3.617 3.617 1.997 0 3.617-1.62 3.617-3.617 0-1.997-1.62-3.617-3.617-3.617z"></path></svg><span className="badge-icon-inner"><svg aria-hidden="true" focusable="false" viewBox="0 0 14 14"><path d="M7 9.567c1.418 0 2.567-1.15 2.567-2.567 0-1.418-1.15-2.567-2.567-2.567-1.418 0-2.567 1.15-2.567 2.567 0 1.418 1.15 2.567 2.567 2.567z"></path></svg></span></span><span className="badge-text">LIVE</span>
      </div>
    </div>
    )
}
export default LiveBadge