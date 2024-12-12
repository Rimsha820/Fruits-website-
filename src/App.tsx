import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import Store from './Components/Store'
import Footer from './Components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home/>
      <Menu/>
      <About/>
      <Store/>
      <Footer/>
    </div>
  );
};

export default App;
