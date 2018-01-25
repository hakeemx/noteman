import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/';
import Main from './components/Main/';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNote: { text: '', id: '' },
      notes: { text: '' },
      loaded: false
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.postData = this.postData.bind(this);
    this.NoteInputFocus = this.NoteInputFocus.bind(this);
    this.createNote = this.createNote.bind(this);
    this.setId = this.setId.bind(this);
    this.sideNoteLinkClick = this.sideNoteLinkClick.bind(this);
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
          notes: response.data,
          loaded: true
        });
      })
      .catch(function(error) {
        // console.log(error);
      });
  }
  updateData() {
    const { activeNote } = this.state;
    //this.setState({ activeNote: { ...this.activeNote.todo, [name]: value } })
    //console.log('Id: ', data.id);
    console.log('State: ', activeNote);

    axios
      .put(`/notes/${activeNote.id}`, activeNote)
      .then(response => {
        this.fetchData();
        console.log(response.data.text);
      })
      .catch(function(error) {
        //console.log(error.response);
      });
  }
  postData(data) {
    axios
      .post(`/notes`, {
        text: data
      })
      .then(response => {
        //console.log(response);
        this.fetchData();
      })
      .catch(function(error) {
        //console.log(error.response);
      });
  }
  componentDidMount() {
    this.fetchData();

    //Update every 10 seconds
    setInterval(() => {
      //this.updateData();
    }, 1000);
  }
  setId(id) {
    this.setState({
      activeNote: { ...this.state.activeNote, ['id']: id }
    });
  }
  sideNoteLinkClick(note, i) {
    //IF its a new id save it to state
    if (i === undefined) {
      i = this.state.activeNote.id;
    }
    //==console.log(`Id is : ${id}`);
    //console.log(`Note is`, note);
    let activeNote = Object.assign({}, this.state.activeNote); //creating copy of object
    activeNote = note; //updating value
    //this.setState({jasper});
    this.setState(
      { activeNote }, //id: i }
      () =>
        this.state.activeNote.text === ''
          ? this.postData(activeNote)
          : console.log('Update')
    );
  }
  handleNoteChange(note, i) {
    let activeNote = Object.assign({}, this.state.activeNote); //creating copy of object
    activeNote.text = note.text; //updating value
    //console.log(activeNote);
    this.setState(
      { activeNote }, //id: i }
      () =>
        this.state.activeNote.text === ''
          ? this.postData(activeNote)
          : this.updateData()
    );
  }
  createNote(note) {}
  NoteInputFocus(note) {
    //console.log(...this.state.notes.data);
    //Render New note at the top of the list
    // this.setState(
    //   {
    //     notes: { text: { ...this.state.notes.text } }
    //   },
    //   () => {
    //     console.log(this.state.notes.text);
    //   }
    // );
    //this.createNote(note);
    //console.log(note);
  }
  render() {
    const { loaded, activeNote, notes } = this.state;
    var note;
    note === undefined ? '' : console.log(Object.getOwnPropertyNames(note));

    note = notes[activeNote.id - 1];
    //note !== undefined && console.log(note['text']);

    //console.log(note);

    return (
      <div className="App">
        {loaded ? (
          <Sidebar
            onClick={this.sideNoteLinkClick}
            notes={notes}
            id={activeNote}
            setId={this.setId}
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
          onFocus={this.NoteInputFocus}
          updateData={this.updateData}
          handleNoteChange={this.handleNoteChange}
          activeNote={this.state.activeNote}
        />
      </div>
    );
  }
}
