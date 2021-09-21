import React from "react";
import "../styles/Team.css";
import Profiles from "./Profiles";

import Container from "./Container";
import Icon10 from "../icons/Icon10";
import Icon11 from "../icons/Icon11";
import Icon12 from "../icons/Icon12";
import Icon13 from "../icons/Icon13";
const Team = () => {
  return (
    <div className="team-lg">
      <div className="team-container">
        <div className="team-heading">
          <h2>Skeptics Speak</h2>
          <p>With millions of Rituals delivered, discover why customers trust us with their daily health.</p>
        </div>
        <div className="carousel">
          <Profiles />
        </div>
        <Container>
          <div className="line"></div>
        </Container>
        <div className="press-container">
          <Icon10 />
          <Icon11 />
          <Icon12 />
          <Icon13 />
        </div>
      </div>
    </div>
  );
};

export default Team;
