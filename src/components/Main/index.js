import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleNoteChange(e.target.value);
    console.log(this.props.activeNote.text);
  }
  render() {
    const note = this.props.activeNote.text;
    return (
      <div className="main-content w-80 fl">
        <input
          type="text"
          className="fr pa1 ma3 ba b--black-10 br-pill bg-transparent"
          placeholder="Search"
        />
        <input
          type="text"
          value={note}
          className="w-100 pa3 bn pa2 bg-transparent"
          placeholder="Write notes here plz"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
