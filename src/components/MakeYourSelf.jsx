import React from "react";
import Container from "./Container";
import "../styles/MakeYourSelf.css";
import img1 from "../images/ritual-image-1578433491042.jpeg";
import img2 from "../images/ritual-image-1579909053449.jpeg";
import img3 from "../images/ig-3.jpg";
import img4 from "../images/IMG_7343.jpg";
const MakeYourSelf = () => {
  return (
    <Container>
      <div className="make-container">
        <div className="make-heading">
          <h2>Make Your Self</h2>
          <p>
            Commit to yourself every single day with <span>@Ritual</span>
          </p>
        </div>
        <div className="make-flex">
          <img src={img1} alt="make" />
          <img src={img2} alt="make" />
          <img src={img3} alt="make" />
          <img src={img4} alt="make" />
        </div>
      </div>
    </Container>
  );
};

export default MakeYourSelf;
