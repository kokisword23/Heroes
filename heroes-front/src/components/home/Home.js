import React from "react";
import Create from "../heroes/create/Create";

const Home = ({ hasHero }) => {
  if (hasHero) {
    return <h2>hello</h2>;
  } else {
    return <Create />;
  }
};

export default Home;
