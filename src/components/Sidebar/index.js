import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  onClick = () => {
    alert("CLICKED");
  };
  render() {
    return (
      <div className="fl w-25 br b--black-05 vh-100 sidebar">
        <ul className="pa0">
          <h2>Notes</h2>
          <button onClick={this.onClick} type="button">
            Link
          </button>
        </ul>
      </div>
    );
  }
}
