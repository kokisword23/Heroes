import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import "../../blur.css";
import "../users.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirmPassword: "", email: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, confirmPassword, email } = this.state;
    const user = { username, password, confirmPassword, email };
    if (user.password !== user.confirmPassword) {
      return;
    }

    this.props.register(user);
  }

  render() {
    return (
      <form className="bg-text" onSubmit={this.handleSubmit}>
        <h3 className="text-font">Register</h3>
        <div className="form-group">
          <label>
            <h6>Username:</h6>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
          <h6>Password:</h6>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
          <h6>Confirm Password:</h6>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              name="confirmPassword"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
          <h6>Email:</h6>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input
            type="submit"
            className="btn btn-secondary mt-2"
            value="Sign up"
          />
        </div>
      </form>
    );
  }
}

export default withRouter(RegisterForm);
