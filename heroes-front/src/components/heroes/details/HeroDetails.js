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
      defence: 0,
      slots: [],
      helmet: false,
      pauldron: false,
      pads: false,
      gauntlet: false,
      weapon: false
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
        defence,
        items
      } = data.data;
      if (this._isMounted) {
        let helmet, pauldron, pads, weapon, gauntlet;
        items.forEach(item => {
          let slot = item.slot;
          switch (slot) {
            case "HELMET":
              helmet = slot;
              break;
            case "PAULDRON":
              pauldron = slot;
              break;
            case "PADS":
              pads = slot;
              break;
            case "WEAPON":
              weapon = slot;
              break;
            case "GAUNTLETS":
              gauntlet = slot;
              break;
            default:
          }
        });
        this.setState({
          name,
          gender,
          level,
          stamina,
          strength,
          attack,
          defence,
          helmet,
          pauldron,
          pads,
          weapon,
          gauntlet
        });
        console.log(this.state);
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { helmet, pauldron, pads, weapon, gauntlet } = this.state;
    console.log(this.state.slots)
    return (
      <div className="container bg-text mt-5">
        <div className="row">
          <div className="col col-md-4">
            <div className="mt-5">
              <h3 className="cool-font">{this.state.name}</h3>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="mt-5">
              <h3 className="cool-font">{this.state.level}</h3>
            </div>
          </div>
          <div className="col col-md-5 mb-2">
            {!!helmet && <Image slot={helmet} />}
            {!helmet && (
              <img
                className="border border-white"
                height="125px"
                width="125px"
              />
            )}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col col-md-4">
            {this.state.gender !== "" && <Image gender={this.state.gender} />}
          </div>
          <div className="col col-md-3">
            <div className="mt-5">
              <h3 className="cool-font">Stamina - {this.state.stamina}</h3>
              <h3 className="cool-font">Strength - {this.state.strength}</h3>
              <h3 className="cool-font">Attack - {this.state.attack}</h3>
              <h3 className="cool-font">Defence - {this.state.defence}</h3>
            </div>
          </div>
          <div className="col col-md-5">
            {!!weapon && <Image slot={weapon} />}
            {!weapon && (
              <img
                className="border border-white"
                height="125px"
                width="125px"
              />
            )}
            {!!pauldron && <Image slot={pauldron} />}
            {!pauldron && (
              <img
                className="border border-white"
                height="125px"
                width="125px"
              />
            )}
            {!!gauntlet && <Image slot={gauntlet} />}
            {!gauntlet && (
              <img
                className="border border-white"
                height="125px"
                width="125px"
              />
            )}
            {!!pads && <Image slot={pads} />}{" "}
            {!pads && (
              <img
                className="border border-white"
                height="125px"
                width="125px"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetails;
