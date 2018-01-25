import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  handleChange(e) {
    var text = e.target.value;
    this.props.handleNoteChange({ text });
  }
  onFocus(note) {
    //this.props.onFocus(note);
  }
  render() {
    const { activeNote } = this.props;
    //console.log(activeNote);
    return (
      <div className="main-content w-80 fl">
        <input
          type="text"
          className="fr pa1 ma3 ba b--black-10 br-pill bg-transparent"
          placeholder="Search"
        />
        <input
          type="text"
          value={activeNote.text}
          onFocus={() => this.onFocus(activeNote)}
          className="w-100 pa3 bn pa2 bg-transparent"
          placeholder="Write notes here plz"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
