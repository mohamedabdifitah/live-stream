import React from "react";
import "../styles/feedShort.scss"
const ShortFeed : React.FC = () => {
  return (
      <video autoPlay  loop controls>
       <source src={"https://drive.google.com/file/d/1FTkFIHZQb--aHZo-KWkDEaYJBWupz-hg/view?usp=drivesdk"} type="video/mp4"/>
      </video>
    )
}
export default ShortFeed