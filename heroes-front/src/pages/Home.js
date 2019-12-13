import React from "react";
import Create from "../components/heroes/create/Create";
import HeroDetails from "../components/heroes/details/HeroDetails";

const Home = ({ hasHero, create }) => {
  if (hasHero) {
    return <HeroDetails/>;
  } else {
    return <Create create={create}/>;
  }
};

export default Home;
