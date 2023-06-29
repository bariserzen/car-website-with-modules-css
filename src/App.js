import React from 'react';
import './index.css';
//components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Find from './components/Find/Find';



const  App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
    </div>
  );
}

export default App;
