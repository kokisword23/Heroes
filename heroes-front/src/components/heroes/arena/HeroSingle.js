import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MaleImg from "../../../male.jpg";
import FemaleImg from "../../../female.jpg";
class HeroSingle extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      heroName: "",
      gender: "",
      level: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("opponent",this.state.heroName);
    this.props.history.push(`/heroes/arena/${this.state.heroName}`);
  }

  componentDidMount() {
    this._isMounted = true;

    const { heroName, gender, level } = this.props.hero;
    if (this._isMounted) {
      this.setState({
        heroName,
        gender,
        level
      });
    }
  }

  render() {
    const { heroName, gender, level } = this.state;
    return (
      <div className="text-center bg-blur w-50">
        {gender === "MALE" && <img src={MaleImg} height="350px" />}
        {gender === "FEMALE" && <img src={FemaleImg} height="350px" />}
        <h3 className="cool-font">{heroName}</h3>
        <h3 className="cool-font">Level - {level}</h3>
        <form className="w-100" onSubmit={this.handleSubmit}>
          <input className="btn btn-danger" type="submit" value="Fight"/>
        </form>
      </div>
    );
  }
}

export default withRouter(HeroSingle);
