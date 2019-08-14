import React from 'react';
import logo from './logo.svg';
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Lamp on />
        <Lamp />
        <Quotes/>;

      </header>
    </div>
  );
}

export default App;
