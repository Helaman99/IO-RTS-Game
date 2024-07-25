import React from 'react';
import './App.css';
import GameManager from './GameManager';
import ScrollZones from './ScrollZones';

function App() {
  return (
    <div className = "App">
        <ScrollZones />
        <GameManager />
    </div>
  );
}

export default App;