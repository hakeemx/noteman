import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/';
import Main from './components/Main/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: ''
    };
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }
  handleNoteChange(note) {
    console.log(`${note}`);
    this.setState({
      activeNote: note
    });
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main
          handleNoteChange={this.handleNoteChange}
          activeNote={this.state.activeNote}
        />
      </div>
    );
  }
}
