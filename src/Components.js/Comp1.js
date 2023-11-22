import React from "react";

export default function Comp1(props) {
  let name = "John";
  return (
    <div>
      <h1>
        Hello {name} {props.surname}!!{" "}
      </h1>
    </div>
  );
}
