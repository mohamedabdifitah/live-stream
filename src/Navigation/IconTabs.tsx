import * as React from 'react';
import "../styles/BottomNav.scss"
import {useNavigate} from "react-router-dom"
interface IBTabs{
  Name:string | null,
  Icon:React.FC,
  url:string 
}
// BottomTabs
 const  BottomTabs:React.FC<IBTabs> = ({Name,Icon,url}) => {
   const navigate = useNavigate()
   return(
      <button onClick={()=> navigate(url)} className="tab-1">
       {/*<span className="charBadge">9</span>
       */}
       <Icon
      
       />
        <div className={`badge-${Name}`}>
       <span className="e-badge e-badge-overlap e-badge-notification">9</span> 
       </div>
       <p className="BottomTabName"> {Name} </p>
      </button>
     )
 }
 
 export {BottomTabs}