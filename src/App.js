import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/';
import Main from './components/Main/';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: '',
      notes: {},
      loaded: false
    };
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    let that = this;
    //Set axios headers
    axios.defaults.baseURL = 'http://5a683eb178f25e00122ad185.mockapi.io';
    axios.defaults.headers.common = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    axios
      .get('notes')
      .then(function(response) {
        that.setState({
          notes: response,
          loaded: true
        });
      })
      .catch(function(error) {
        // console.log(error);
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  handleNoteChange(note) {
    this.setState({
      activeNote: note
    });
  }
  render() {
    const { loaded } = this.state;
    return (
      <div className="App">
        {loaded ? (
          <Sidebar
            handleNoteChange={this.handleNoteChange}
            notes={this.state.notes}
          />
        ) : (
          <div className="fl w-20 br b--black-05 vh-100 sidebar">
            <ul className="pa0">
              <h2>Notes</h2>
              <li>No data</li>
            </ul>
          </div>
        )}
        <Main
          handleNoteChange={this.handleNoteChange}
          activeNote={this.state.activeNote}
        />
      </div>
    );
  }
}
