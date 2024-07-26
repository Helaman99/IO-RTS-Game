import { useEffect } from 'react';

export default function ScrollZone() {
    const scrollSpeed = 10;
    const threshold = 80; // Adjust this value to increase the minimum distance
  
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
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;
  
        if (Math.abs(distanceX) > centerX - threshold) {
          if (distanceX > 0) {
            scrollPage('right');
          } else {
            scrollPage('left');
          }
        }
  
        if (Math.abs(distanceY) > centerY - threshold) {
          if (distanceY > 0) {
            scrollPage('down');
          } else {
            scrollPage('up');
          }
        }
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
}