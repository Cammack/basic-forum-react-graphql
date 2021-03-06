import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Sidebar from './components/sidebar/SideBar';
import LeftMenu from "./components/LeftMenu"
import Main from "./components/Main"
import RightMenu from "./components/RightMenu"

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
