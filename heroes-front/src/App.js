import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Register from "./components/users/register/Register";
import Login from "./components/users/login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = !!localStorage.getItem('token');
    this.state = { isLogged };
  }

  render() {
    const { isLogged } = this.state;

    return (
      <div className="root">
        <Router>
          <Navbar isLogged={isLogged} />
          <div className="page-content-wrapper">
            <Home />
            <Switch>
              <Route exact path="/about" />
              <Route exact path="/users/login" component={Login} />
              <Route exact path="/users/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
