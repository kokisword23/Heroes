import React from "react";
import HeroSingle from "./HeroSingle";

import "./arena.css";

const Heroes  = ({heroes}) => {
    return (
        <div className="d-flex justify-content-center">
        {heroes.map(hero => (
            <HeroSingle key={hero.heroName} hero={hero}/>
        ))}
        </div>
    );
}

export default Heroes;

