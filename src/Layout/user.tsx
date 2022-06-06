import React from "react"
import BottomNav from "../Navigation/BottomNav";
import Profile from "../user/profile"
import Posts from "../user/posts"
import Header from "../header/header"
import "../styles/UserLayout.scss"
const UserLayout : React.FC = () => {
  return (
     <div className="UserLayout">
     <Header />
     <section className="user-sec">
       <Profile />
       <Posts />
      </section>
      <BottomNav />
     </div>
    )
}
export default UserLayout