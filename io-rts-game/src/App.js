import React, { useState } from 'react';
import './App.css';
import ScrollZone from './ScrollZone';
import SideBar from './SideBar';
import GameManager from './GameManager';

function App() {
  const [currBlock, setCurrBlock] = useState(null);
  const displayBlockDetails = (gridBlock) => {
    setCurrBlock(gridBlock);
  };

  return (
    <div className = "App">
      <ScrollZone />
      <SideBar currBlock = {currBlock} />
      <GameManager displayBlockDetails = {displayBlockDetails} />
    </div>
  );
}

export default App;