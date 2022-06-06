import React from "react"
import BottomNav from "../Navigation/BottomNav";
import Header from "../header/header";
import "../styles/FriendsPage.scss"
const FriendsPage : React.FC = () => {
  return (
     <div className="friends-page">
     <Header />
     <section className="frPage-sect-2">
     </section>
       <BottomNav/>
     </div>
    )
}
export default FriendsPage;