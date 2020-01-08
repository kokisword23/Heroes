import React from "react";

import MaleImg from "../../male.jpg";
import FemaleImg from "../../female.jpg";
import Helmet from "../../helmet.jpg";
import Pauldron from "../../pauldron.jpg";
import Pads from "../../pads.jpg";
import Gauntlets from "../../gauntlet.jpg";
import Weapon from "../../weapon.jpg";

const Image = ({ gender, slot }) => {
  console.log(gender);
  if (gender === "MALE") {
    return <img src={MaleImg} alt="Male avatar" height="350px" width="250px" />;
  } else if (gender === "FEMALE") {
    return (
      <img src={FemaleImg} alt="Male avatar" height="350px" width="250px" />
    );
  } else if (slot === "HELMET") {
    return (
      <img
        src={Helmet}
        alt="Helmet"
        className="border border-white"
        height="125px"
        width="125px"
      />
    );
  } else if (slot === "PAULDRON") {
    return (
      <img
        src={Pauldron}
        className="border border-white"
        alt="Pauldron"
        height="125px"
        width="125px"
      />
    );
  } else if (slot === "PADS") {
    return (
      <img
        src={Pads}
        alt="Pads"
        className="border border-white"
        height="125px"
        width="125px"
      />
    );
  } else if (slot === "GAUNTLETS") {
    return (
      <img
        src={Gauntlets}
        alt="Gauntlets"
        className="border border-white"
        height="125px"
        width="125px"
      />
    );
  } else if (slot === "WEAPON") {
    return (
      <img
        src={Weapon}
        alt="Weapon"
        className="border border-white"
        height="125px"
        width="125px"
      />
    );
  }
};

export default Image;
