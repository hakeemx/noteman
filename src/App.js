import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/';
import Main from './components/Main/';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: { text: '' },
      notes: { text: '' },
      loaded: false
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  fetchData() {
    let that = this;
    //Set axios headers
    axios.defaults.baseURL = 'http://5a683eb178f25e00122ad185.mockapi.io';
    axios.defaults.headers.common = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';

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
  updateData() {
    const { activeNote } = this.state;
    console.log(activeNote);
    //this.setState({ activeNote: { ...this.activeNote.todo, [name]: value } });

    if (activeNote.text !== '') {
      console.log(`/notes/${activeNote.id}`);
      // axios
      //   .put(`/notes/${activeNote.id}`, {
      //     text: activeNote.text
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error.response);
      //   });
    }
  }
  componentDidMount() {
    this.fetchData();

    //Update every 10 seconds
    setInterval(() => {
      //this.updateData();
    }, 1000);
  }
  handleNoteChange(note) {
    // console.log(note);
    this.setState(
      {
        activeNote: { text: note }
      },
      () => {
        console.log(this.state.activeNote);
      }
    );
    // console.log(this.state.activeNote);
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
          updateData={this.updateData}
          handleNoteChange={this.handleNoteChange}
          activeNote={this.state.activeNote}
        />
      </div>
    );
  }
}
