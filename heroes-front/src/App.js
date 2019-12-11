import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import userService from "./services/user-service";
import Logout from "./components/users/logout/Logout";
import Home from "./components/home/Home";
import heroService from "./services/hero-service";
import {hasUserHero} from "./utils/jwt";

class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = !!localStorage.getItem("token");
    const hasHero = hasUserHero();
    this.state = { isLogged, hasHero};
  }

  login = user => {
    userService.login(user).then(() => {
      this.setState({ isLogged: true });
      this.props.history.push("/home");
    });
  };

  logout = () => {
    userService.logout();
    this.setState({ isLogged: false });
    this.props.history.push("/");
    return null;
  };

  register = user => {
    userService.register(user);
    this.props.history.push("/users/login");
  }

  create = hero => {
    heroService.create(hero);
    this.props.history.push("/home");
  }

  render() {
    const { isLogged, hasHero } = this.state;
    console.log(hasHero)
    return (
      <div className="root">
        <Navbar isLogged={isLogged} />
          <Switch>
            <Route exact path ="/" component={() =>  (
              <Index register={this.register} />
            )} />
            <Route
              exact
              path="/users/login"
              component={() => (
                <Login login={this.login} isLogged={isLogged} />
              )}
            />
            <Route
              exact
              path="/logout"
              component={() => <Logout logout={this.logout} />}
            />
            <Route exact path="/home" component={() => (
              <Home create={this.create} hasHero={hasHero}/>
            )}/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
