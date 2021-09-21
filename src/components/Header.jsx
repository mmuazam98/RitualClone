import React from "react";
import headerImg from "../images/Home-Hero-Desktop.jpg";
import headerImgMobile from "../images/Home-Hero-Mobile.jpg";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <img src={headerImg} alt="header" className="img-lg" />
      <img src={headerImgMobile} alt="header" className="img-sm" />
      <div className="content">
        <h1 className="content-text">
          <div>The future</div>
          <div>of health</div>
          <div>
            <em>— is clear.</em>
          </div>
        </h1>
        <div className="content-btn">
          <a href="#Top" className="btn btn-shop">
            Shop All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
