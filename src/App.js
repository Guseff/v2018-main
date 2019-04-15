import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Hero />
          <Footer />
      </div>
    );
  }
}

export default App;