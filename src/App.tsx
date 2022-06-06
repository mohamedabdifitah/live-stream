import React from 'react';
//import { Counter } from './features/counter/Counter';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.scss';
import HomeLayout from "./Layout/Home"
import InboxPage from "./Layout/inbox"
import FriendsPage from "./Layout/FriendsPage"
import Live from "./Layout/Live"
import ErrorPage from "./ErrorPage"
import UserLayout from "./Layout/user"
import Login from "./auth/login"
import Register from "./auth/register"
import Auth from "./auth/auth"
//import Register from "./auth/register"
function App() {
  return (
     <Router>
      <div className="App">
      <Routes>
        <Route  path="/" element={<HomeLayout/>} />
        {/*
        <Route  path="/" element={<Auth/>} />
        
        */}
        <Route  path="/user" element={<UserLayout/>} />
        <Route  path="/1234" element={<Live/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/inbox/messages" element={<InboxPage/>} />
        <Route  path="/friends" element={<FriendsPage/>} />
        <Route  path="/accounts/signup" element={<Register/>} />
        <Route  path="*" element={<ErrorPage /> }/>
        
       </Routes>
      </div>
    </Router>
  );
}

export default App;
