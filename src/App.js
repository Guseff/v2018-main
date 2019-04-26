import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Exchanges from './components/Exchanges';
import Tools from './components/Tools';
import Steps from './components/Steps';
import Trasted from './components/Trasted';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Hero />
          <Advantages />
          <Exchanges />
          <Tools />
          <Steps />
          <Trasted />
          <Footer />
      </div>
    );
  }
}

export default App;