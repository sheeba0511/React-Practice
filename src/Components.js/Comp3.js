import React from "react";

let Copm3 = (props) => {
  let name = "Tom";
  return (
    <h1>
      Hello {name} {props.children}
      {/* we can pass the data inside the element and retrieve the data through the props.children  */}
    </h1>
  );
};
export default Copm3;
