import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import userService from "./services/user-service";
import Logout from "./components/users/logout/Logout";
import Home from "./components/home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = !!localStorage.getItem("token");
    this.state = { isLogged };
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

  render() {
    const { isLogged } = this.state;
    console.log(isLogged);

    return (
      <div className="root">
        <Navbar isLogged={isLogged} />
          <Switch>
            <Route exact path ="/" component={Index} />
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
            <Route exact path="/home" component={Home}/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
