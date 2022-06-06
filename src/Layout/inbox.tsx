import React from "react"
import BottomNav from "../Navigation/BottomNav";
import {InboxMessage} from "../scripts/messages/messages"
import Header from "../header/header";
import "../styles/inboxLayout.scss"
const InboxPage : React.FC = () => {
  return (
     <div className="inbox">
     <Header />
     <section className="inbox-sect-2">
      <InboxMessage />
      {/*<InboxMessage />*/}
     </section>
       <BottomNav/>
     </div>
    )
}
export default InboxPage;