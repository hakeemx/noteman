import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = {
      active: false
    };
  }
  onClick(note, i) {
    this.props.onClick(note, i);
    // console.log(`Id is: ${this.props.id}`);
    //this.props.setId(i);
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    const { active } = this.state;
    return (
      <div className="fl w-20 br b--black-05 vh-100 sidebar">
        <ul className="pa0">
          <h2>Notes</h2>
          {this.props.notes.map(function(note) {
            return (
              <li className="list" key={note.id}>
                <Link
                  to={`/${note.id}`}
                  className="black fl link tl pointer w-100 bn bg-transparent pa3 hover-white"
                  onClick={() => this.onClick(note, note.id)}
                >
                  {note.name}
                </Link>
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
