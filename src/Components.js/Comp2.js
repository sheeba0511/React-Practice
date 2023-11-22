import React, { Component } from "react";

export default class Comp2 extends Component {
  render() {
    let name = "Diana";
    return (
      <div>
        <h1>
          {" "}
          Hello {name} {this.props.lastname}
        </h1>
      </div>
    );
  }
}
