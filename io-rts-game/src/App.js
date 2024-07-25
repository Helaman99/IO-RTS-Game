import React from 'react';
import './App.css';
import GameManager from './GameManager';
import ScrollZone from './ScrollZone';

function App() {
  return (
    <div className = "App">
        <ScrollZone />
        <GameManager />
    </div>
  );
}

export default App;