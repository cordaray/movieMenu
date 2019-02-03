import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
