import React from 'react';
//import { Counter } from './features/counter/Counter';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.scss';
import HomeLayout from "./Layout/Home"
/*import Header from "./header/header"
import BottomNav from "./Navigation/BottomNav"
import Feed from "./Feed/feed"
import Stories from "./stories/stories"
*/
import UserLayout from "./Layout/user"
function App() {
  return (
     <Router>
      <div className="App">
      <Routes>
        <Route  path="/" element={<HomeLayout/>} />
        <Route  path="/user" element={<UserLayout/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
