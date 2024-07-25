import React, { useState } from 'react';

export default function ScrollZones() {
  const scrollSpeed = 40;
  const [scrollInterval, setScrollInterval] = useState(null);

  const scrollPage = (direction) => {
    switch (direction) {
      case 'left':
        window.scrollBy(-scrollSpeed, 0);
        break;
      case 'right':
        window.scrollBy(scrollSpeed, 0);
        break;
      case 'up':
        window.scrollBy(0, -scrollSpeed);
        break;
      case 'down':
        window.scrollBy(0, scrollSpeed);
        break;
      default:
        break;
    }
  };

  const handleMouseEnter = (direction) => {
    const interval = setInterval(() => scrollPage(direction), 50);
    setScrollInterval(interval);
  };

  const handleMouseLeave = () => {
    clearInterval(scrollInterval);
  };

  return (
    <>
      <button
        className="scroll-zone"
        id="scroll-up"
        style={{ width: '100%', height: '80px' }}
        onMouseEnter={() => handleMouseEnter('up')}
        onMouseLeave={handleMouseLeave}
      >
        Up
      </button>
      <button
        className="scroll-zone"
        id="scroll-down"
        style={{ width: '100%', height: '80px', bottom: 0 }}
        onMouseEnter={() => handleMouseEnter('down')}
        onMouseLeave={handleMouseLeave}
      >
        Down
      </button>
      <button
        className="scroll-zone"
        id="scroll-left"
        style={{ width: '80px', height: '100%' }}
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={handleMouseLeave}
      >
        Left
      </button>
      <button
        className="scroll-zone"
        id="scroll-right"
        style={{ width: '80px', height: '100%', right: 0 }}
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={handleMouseLeave}
      >
        Right
      </button>
    </>
  );
}