import React from 'react';
import './App.css';
import ScrollZone from './ScrollZone';
import SideBar from './SideBar';
import GameManager from './GameManager';

function App() {
  return (
    <div className = "App">
        <ScrollZone />
        <SideBar />
        <GameManager />
    </div>
  );
}

export default App;