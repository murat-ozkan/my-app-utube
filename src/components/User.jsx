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

  //! Bind işlemi aşağıda. "this" komutunun buraya ait olmasını sağlar.
  //! Normalde bu js alanında "this" çalışmıyor.
  //! Aşağıdaki jsx alanında çalışıyordu.
  constructor(props) {
    super(props);
    this.state = { interview: false };
    this.onClickFunction = this.onClickFunction.bind(this);
  }
  // onClickFunction(e) {
  //   console.log(e.target);
  //   console.log("test");
  //   console.log(this);
  // }
  //! Buradaki onclick fonk arrow olduğu için
  //! yukarıdaki bind işlemini ypmamıza gerek kalmadı.
  //! Eğer yukarıdaki onclick fonk gibi yazsaydık o zaman
  //! bind işlemi gerekecekti.

  onClickFunction = (number, e) => {
    // console.log(e.target);
    // console.log(this);
    // console.log(number);
    // this.state = { interview: true };
  };
  render() {
    const { name, department, salary } = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4
              className="d-inline"
              onClick={this.onClickFunction.bind(this, 34)}
            >
              {name}
            </h4>
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
