import React, { Component } from "react";

import "./heroDetails.css";
import "../../blur.css";
import heroService from "../../../services/hero-service";
import Image from "../Image";

class HeroDetails extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      level: 0,
      stamina: 0,
      strength: 0,
      attack: 0,
      defence: 0
    };
  }
  
  componentDidMount() {
    this._isMounted = true;
    
    heroService.getHero(localStorage.getItem("hero")).then(data => {
      const {
        name,
        gender,
        level,
        stamina,
        strength,
        attack,
        defence
      } = data.data;
      if (this._isMounted) {
        this.setState({
          name,
          gender,
          level,
          stamina,
          strength,
          attack,
          defence
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="container bg-text mt-5">
        <div className="row">
          <div className="col col-md-4">
            <div className="mt-1">
              <h3 className="cool-font">{this.state.name}</h3>
            </div>
          </div>
          <div className="col col-md-4"></div>
          <div className="col col-md-4"></div>
        </div>
        <div className="row">
          <div className="col col-md-4">
            {this.state.gender !=="" && <Image gender={this.state.gender} />}
          </div>
          <div className="col col-md-4">
            <div className="mt-5">
              <h3 className="cool-font">Stamina - {this.state.stamina}</h3>
              <h3 className="cool-font">Strength - {this.state.strength}</h3>
              <h3 className="cool-font">Attack - {this.state.attack}</h3>
              <h3 className="cool-font">Defence - {this.state.defence}</h3>
            </div>
          </div>
          <div className="col col-md-4"></div>
        </div>
        <div className="row">
          <div className="col col-md-4"></div>
          <div className="col col-md-4"></div>
          <div className="col col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default HeroDetails;
