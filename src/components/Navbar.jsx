// import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <div>Navbar Section </div>
      <h1>{props.title}</h1>
      <p className="bg-warning">{props.baslik}</p>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "User App Default Value (Navbar.defaultProps)",
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
