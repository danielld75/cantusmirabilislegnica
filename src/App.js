import React from 'react';
import './App.css';
import About from './about';
import Footer from './footer';
import Events from "./events";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CANTUS MIRABILIS</h1>
        <h3>&#8595;</h3>
      </header>
      <About/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
