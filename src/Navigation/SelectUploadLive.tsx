import React from "react";
import "../styles/SelUploadLive.scss";
import UploadVideo from "./upload"
export const SelectUploadLive  : React.FC = () => {
  return (
     <div className="SelUplLive">
      <span className="e-badge e-badge-danger e-badge-overlap e-badge-notification">9</span> 
      <UploadVideo />
        </div>
    )
}