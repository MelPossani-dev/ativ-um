import React from 'react';
import Header from './header.js';
import NavigationMenu from './NavigationMenu.js';
import ListComponent from './ListComponent.js';
import Footer from './footer.js';
import './App.css';  // Importe o arquivo CSS global

const App = () => {
  const items = ['Avon', 'Impala', 'Dailus', 'Essie'];  // Exemplo de lista

  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      <ListComponent items={items} />
      {/* Adicione outros componentes e conteúdo aqui */}
      <Footer />
    </div>
  );
};

export default App;
