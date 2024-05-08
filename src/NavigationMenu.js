import React from 'react';
import './NavigationMenu.css';  // Importe o arquivo CSS

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/produtos">Produtos</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
