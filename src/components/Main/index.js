import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleNoteChange(e.target.value);
  }
  render() {
    const note = this.props.activeNote;
    return (
      <div className="main-content w-75 fl">
        <input
          type="text"
          className="fr pa1 ba b--black-10 br-pill bg-transparent"
          placeholder="Search"
        />
        <input
          type="text"
          value={note}
          className="w-100 pa2 bn pa2 bg-transparent"
          placeholder="Write notes here plz"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}