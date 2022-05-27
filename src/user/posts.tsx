import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import "../styles/posts.scss"
import PostCard from "./postCard";
const Posts:React.FC = () => {
  return (
     <div className="user-posts">
       <div className="header">
         <button>
           <AppsIcon/>
         </button>
         <button>
           <LiveTvIcon/>
         </button>
       </div>
       <div className="display">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        
       </div>
     </div>
     
    )
}

export default Posts