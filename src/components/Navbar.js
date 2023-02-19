import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <div>
      <div>Navbar Section </div>
      <h1>{props.title}</h1>
      <p className="bg-warning">{props.baslik}</p>
    </div>
  );
};

// function Navbar() {
//   return <div>Navbar Section</div>;
// }

// class Navbar extends Component {
//   render() {
//     return <div>Navbar Section</div>;
//   }
// }

export default Navbar;
