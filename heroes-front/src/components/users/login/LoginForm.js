import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../../blur.css";
import axios from "axios";
import InputLabel from "../../label/InputLabel";

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
    const { username, password } = this.state;
    const user = { username, password };

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios.post("http://localhost:8080/api/users/login", user, axiosConfig);
    this.props.history.push("/home");
  }

  render() {
    return (
      <form className="bg-text" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Username:
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
            Password:
            <input
              type="text"
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
            value="Sign up"
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
