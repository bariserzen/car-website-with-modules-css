import React from 'react';
import './index.css';
//components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Find from './components/Find/Find';
import Driver from './components/Driver/Driver';
import Luxury from './components/Luxury/Luxury';
import Footer from './components/Footer/Footer';



const  App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
