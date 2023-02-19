import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Department: {this.props.department}</li>
          <li>Salary: {this.props.salary}</li>
        </ul>
        {/* <form>
          <input type="text" name="" id="" />
          <br />
          <button>Gönder</button>
        </form> */}
      </div>
    );
  }
}
export default User;
