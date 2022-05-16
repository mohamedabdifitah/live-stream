import React from "react"
import BottomNav from "../Navigation/BottomNav";
import Profile from "../user/profile"
import "../styles/UserLayout.scss"
const UserLayout : React.FC = () => {
  return (
     <div className="UserLayout">
      <Profile />
      <BottomNav />
     </div>
    )
}
export default UserLayout