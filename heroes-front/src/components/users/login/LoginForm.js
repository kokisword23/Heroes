import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../../blur.css";
import "../users.css";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

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
    this.props.handler();
    const { username, password } = this.state;
    const user = { username, password };
    this.props.login(user);
  }

  render() {
    return (
      <form className="bg-text" onSubmit={this.handleSubmit}>
        <h3 className="text-font">Login</h3>
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
          <br />
          <input
            type="submit"
            className="btn btn-secondary mt-2"
            value="Sign in"
          />
        </div>
        {/* <InputLabel
          labelName='Username'
          typeOfText='text'
          placehoder='Username'
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <InputLabel
          labelName='Password'
          typeOfText='password'
          placehoder='Password'
          value={this.state.password}
          onChange={this.handleInputChange}
        />
         <input
            type="submit"
            className="btn btn-secondary mt-2"

        /> */}
      </form>
    );
  }
}

export default withRouter(LoginForm);
