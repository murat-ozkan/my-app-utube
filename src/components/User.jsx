import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

class User extends Component {
  static defaultProps = {
    name: "No Information",
    salary: "No Information",
    department: "No Information",
  };
  constructor(props) {
    super(props);
    this.state = {
      interview: false,
    };
  }

  render() {
    const { name, department, salary } = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </i>
          </div>
          {this.state.interview ? (
            <div className="card-body">
              <p className="card-text">Department : {department}</p>
              <p className="card-text">Salary : {salary}</p>
            </div>
          ) : null}
        </div>

        {/* <ul>
          <li>Name: {name}</li>
          <li>Department: {department}</li>
          <li>Salary: {salary}</li>
        </ul> */}
        {/* <form>
          <input type="text" name="" id="" />
          <br />
          <button>Gönder</button>
        </form> */}
      </div>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
};
User.defaultProps = {
  name: "No Information",
  salary: "No Information",
  department: "No Information",
};
export default User;
