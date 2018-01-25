import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick(note, i) {
    this.props.onClick(note, i);
    // console.log(`Id is: ${this.props.id}`);
    //this.props.setId(i);
  }
  render() {
    return (
      <div className="fl w-20 br b--black-05 vh-100 sidebar">
        <ul className="pa0">
          <h2>Notes</h2>
          {this.props.notes.map(function(note) {
            return (
              <li key={note.id}>
                <button
                  className="link pointer w-100 bb-0 br-0 bl-0 bg-transparent bt b--black-05 pa2 hover-white"
                  onClick={() => this.onClick(note, note.id)}
                >
                  {note.name}
                </button>
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
