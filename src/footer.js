import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [fontSize, setFontSize] = useState(16); // State for font size
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State for background color

  const handleFontSizeIncrease = () => {
    setFontSize(fontSize + 2);
  };

  const handleFontSizeDecrease = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 2);
    }
  };

  const handleRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <footer className="footer" style={{ backgroundColor }}>
      <div className="footer-controls">
        <button onClick={handleFontSizeIncrease}>Aumentar Fonte</button>
        <button onClick={handleFontSizeDecrease}>Diminuir Fonte</button>
        <button onClick={handleRandomColor}>Cor Aleatória</button>
      </div>
      <div className="footer-content" style={{ fontSize }}>
        <p>© 2024 Mel Esmalteria</p>
        <p>Feito por  por Melissa Fernanda Possani</p>
        <p>RA: 10482315215</p>
      </div>
    </footer>
  );
};

export default Footer;
