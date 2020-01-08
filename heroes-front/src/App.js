import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import userService from "./services/user-service";
import Logout from "./components/users/logout/Logout";
import Create from "./components/heroes/create/Create";
import heroService from "./services/hero-service";
import { hasUserHero, isAdmin, getHeroNameFromToken } from "./utils/jwt";
import HeroDetails from "./components/heroes/details/HeroDetails";
import ItemForm from "./components/items/ItemForm";
import itemService from "./services/item-service";
import Merchant from "./components/merchant/Merchant";
import Arena from "./components/heroes/arena/Arena";
import Fight from "./components/heroes/fight/Fight";

class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = !!localStorage.getItem("token");
    const hasHero = false;
    const isAdmin = false;
    this.state = { isLogged, hasHero, isAdmin };

    this.handler = this.handler.bind(this);
    this.adminHandler = this.adminHandler.bind(this);
  }

  login = user => {
    userService.login(user).then(data => {
      this.handler();
      this.setState({ isLogged: true, isAdmin: isAdmin() });
      if (this.state.hasHero === true) {
        localStorage.setItem("hero", getHeroNameFromToken());
        return this.props.history.push("/home");
      }

      this.props.history.push("/heroes/create");
    });
  };

  logout = () => {
    userService.logout();
    this.setState({ isLogged: false, isAdmin: false });
    this.props.history.push("/");
  };

  register = user => {
    userService.register(user);
    this.props.history.push("/users/login");
  };

  createHero = hero => {
    heroService.create(hero).then(() => {
      this.props.history.push("/home");
    });
  };

  createItem = item => {
    itemService.create(item).then(() => {
      this.props.history.push("/home");
    });
  };


  handler() {
    this.setState({ hasHero: hasUserHero() });
  }

  adminHandler() {
    this.setState({ isAdmin: isAdmin() });
  }

  componentDidMount() {
    if (this.state.isLogged) {
      this.adminHandler();
    }
  }

  render() {
    const { isLogged, isAdmin } = this.state;
    return (
      <div className="root">
        <Navbar isLogged={isLogged} isAdmin={isAdmin} />
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
            component={() => <HeroDetails adminHandler={this.adminHandler} />}
            // component={() => <Home create={this.create} hasHero={hasHero} />}
          />
          <Route
            exact
            path="/heroes/create"
            component={() => <Create create={this.createHero} />}
          />
          <Route exact path="/heroes/arena" component={() => <Arena  history={this.props.history}/>} />
          <Route
            exact
            path="/items/create"
            component={() => <ItemForm create={this.createItem} />}
          />
          <Route
            exact
            path="/merchant"
            component={() => <Merchant history={this.props.history} />}
          />
          <Route exact path ="/heroes/arena/:name" component={() => <Fight/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
