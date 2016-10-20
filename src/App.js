import React, { Component } from 'react';
import logo from '../public/choclate_logo.jpg';
import './App.css';
import List from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Choclate Store</h2>
        </div>
        <List/>
      </div>
    );
  }
}

export default App;
