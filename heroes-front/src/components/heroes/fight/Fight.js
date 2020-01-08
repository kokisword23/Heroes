import React, { Component } from "react";

import heroService from "../../../services/hero-service";
import Image from "../Image";
import "./fight.css";

class Fight extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { heroes: [], winner: "" };
  }

  componentDidMount() {
    this._isMounted = true;

    heroService.fight(localStorage.getItem("opponent")).then(data => {
      const heroes = data.data;
      if (this._isMounted) {
        this.setState({ heroes });
        localStorage.removeItem("opponent");
      }
    });
  }

  fight = () => {
    heroService.winner(this.state.heroes[1].name).then(data => {
      const winner = data.data;
      this.setState({ winner });
    });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const hero = this.state.heroes[0];
    const opponent = this.state.heroes[1];
    const { winner } = this.state;
    return (
      <div className="container">
        {!!hero && (
          <div className="row align-items-center bg-blur">
            <div className="col-md-5">
              <h3>
                {hero.name} - {hero.level}
              </h3>
              <Image gender={hero.gender} />
              <h2 className="mt-2">Stamina - {hero.stamina}</h2>
              <h2>Strength - {hero.strength}</h2>
              <h2>Attack - {hero.attack}</h2>
              <h2>Defence - {hero.defence}</h2>
            </div>
            <div className="col-md-2 ">
              {!!winner && (
                <h1 className="text-white">{winner} is the winner !!!</h1>
              )}
              {winner === "" && (
                <input
                  className="btn btn-danger w-100"
                  onClick={this.fight}
                  value="Fight!"
                />
              )}
            </div>
            <div className="col-md-5">
              <h3>
                {opponent.name} - {opponent.level}
              </h3>
              <Image gender={opponent.gender} />
              <h2 className="mt-2">Stamina - {opponent.stamina}</h2>
              <h2>Strength - {opponent.strength}</h2>
              <h2>Attack - {opponent.attack}</h2>
              <h2>Defence - {opponent.defence}</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Fight;
