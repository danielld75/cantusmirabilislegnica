import React from 'react';
import './App.css';
import About from './about';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CANTUS MIRABILIS</h1>
        <h3>&#8595;</h3>
      </header>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
