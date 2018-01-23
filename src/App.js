import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}
