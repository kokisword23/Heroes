import React, { Component } from "react";

import "./heroDetails.css";
import heroService from "../../../services/hero-service";
import { getHeroNameFromToken } from "../../../utils/jwt";

class HeroDetails extends Component {
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
    this.getHero = this.getHero.bind(this);
  }

  getHero() {
    heroService.getHero(getHeroNameFromToken()).then((data) => {
        const {name, gender, level, stamina, strength, attack,defence} = data.data;
        this.setState({name, gender,level,stamina,strength,attack,defence});
    });
  }

  render() {
    this.getHero()
    return <div className="row"></div>;
  }
}

export default HeroDetails;
