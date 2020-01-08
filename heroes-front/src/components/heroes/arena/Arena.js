import React, { Component } from "react";

import Heroes from "./Heroes";
import heroService from "../../../services/hero-service";

class Arena extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { heroes: [] };
  }

  componentDidMount() {
    this._isMounted = true;

    heroService.getOpponents().then(data => {
      const heroes = data.data;
      if (this._isMounted) {
        this.setState({ heroes });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { heroes } = this.state;
    console.log(heroes);
    return (
      <div className="container">
        {heroes.length === 0 && (
          <h1 className="cool-font">There are no opponents in the Arena!</h1>
        )}
        {heroes.length !== 0 && <>
            <h1 className="text-center cool-font text-white mt-3 mb-4">Arena</h1>
            <Heroes heroes={this.state.heroes}/>
        </>}
      </div>
    );
  }
}

export default Arena;
