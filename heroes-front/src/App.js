import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import userService from "./services/user-service";
import Logout from "./components/users/logout/Logout";
import Home from "./pages/Home";
import heroService from "./services/hero-service";
import { hasUserHero } from "./utils/jwt";

class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = !!localStorage.getItem("token");
    const hasHero = false;
    this.state = { isLogged, hasHero };

    this.handler = this.handler.bind(this);
  }

  login = user => {
    userService.login(user).then(() => {
      this.setState({ isLogged: true });
      this.handler();
      this.props.history.push("/home");
    });
  };

  logout = () => {
    userService.logout();
    this.setState({ isLogged: false });
    this.props.history.push("/");
  };

  register = user => {
    userService.register(user);
    this.props.history.push("/users/login");
  };

  create = hero => {
    heroService.create(hero);
    this.props.history.push("/home");
  };

  handler() {
    this.setState({ hasHero: hasUserHero() });
  }

  render() {
    const { isLogged, hasHero } = this.state;
    return (
      <div className="root">
        <Navbar isLogged={isLogged} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Index register={this.register} />}
          />
          <Route
            exact
            path="/users/login"
            component={() => (
              <Login
                login={this.login}
                isLogged={isLogged}
                handler={this.handler}
              />
            )}
          />
          <Route
            exact
            path="/logout"
            component={() => <Logout logout={this.logout} />}
          />
          <Route
            exact
            path="/home"
            component={() => <Home create={this.create} hasHero={hasHero} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
