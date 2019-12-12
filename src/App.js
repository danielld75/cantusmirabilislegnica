import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <About/>
      </header>
    </div>
  );
}

export default App;
