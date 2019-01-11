import React, { Component } from 'react';
import AppBar from './component/AppBar';
import Slider from './component/Slider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={{ backgroundColor: 'rgba(0,0,0,.8)' }} />
        <Slider />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
