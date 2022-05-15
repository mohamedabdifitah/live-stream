import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from "./header/header"
import BottomNav from "./Navigation/BottomNav"
import Feed from "./Feed/feed"
import Stories from "./stories/stories"
function App() {
  return (
    <div className="App">
      <Header />
     <Stories />
      <Feed />
      <BottomNav />
    </div>
  );
}

export default App;
