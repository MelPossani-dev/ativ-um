import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ff007f'); // Initial color: Fuchsia

  const handleRandomColorChange = () => {
    const randomHue = Math.floor(Math.random() * (300 - 270) + 270); // Hue range for pinks and lilacs
    const saturation = 0.8;
    const lightness = 0.6;
    const newColor = `hsl(${randomHue}, ${saturation * 100}%, ${lightness * 100}%)`;
    setBackgroundColor(newColor);
  };

  return (
    <header className="header" style={{ backgroundColor }}>
      <h1>Mel Esmalteria</h1>
      <button onClick={handleRandomColorChange}>Mudar Cor Aleatória</button>
    </header>
  );
};

export default Header;

