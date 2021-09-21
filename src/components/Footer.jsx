import React from "react";
import Container from "./Container";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Icon14 from "../icons/Icon14";
const Footer = () => {
  return (
    <>
      <hr />
      <Container>
        <div className="footer">
          <div className="section news-section">
            <div className="section-item">
              <h3>Subscribe for updates, exclusive promotions, and more.</h3>
            </div>
            <div className="section-item">
              <div className="input">
                <input type="text" placeholder="Enter your email" />
                <a href="#home">Subscribe</a>
              </div>
              <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <PinterestIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="section links-section">
            <div className="column">
              <h2>Ritual</h2>
            </div>
            <div className="column">
              <div className="column-heading">SHOP</div>
              <div className="column-item">Multivitamin</div>
              <div className="column-item">Protein</div>
              <div className="column-item">Bundles</div>
              <div className="column-item">Gift Cards</div>
            </div>
            <div className="column">
              <div className="column-heading">ABOUT</div>
              <div className="column-item">Ingredients</div>
              <div className="column-item">Who We Are</div>
              <div className="column-item">Our Clinical Study</div>
              <div className="column-item">The Journal</div>
              <div className="column-item">Reviews</div>
            </div>
            <div className="column">
              <div className="column-heading">MORE</div>
              <div className="column-item">Careers</div>
              <div className="column-item">Press</div>
              <div className="column-item">Help</div>
            </div>
          </div>
          <hr id="btm" />
          <div className="section bottom-section">
            <div className="column">
              <Icon14 />
              <div className="column-links">
                <div className="col-link">
                  <a href="#home">Privacy Policy</a>
                  <a href="#home">Terms of Service</a>
                  <a href="#home">Accessibility</a>
                  <a href="#home">Do Not Track</a>
                </div>
                <div className="copyright">© 2021 Ritual. All rights reserved.</div>
              </div>
            </div>
            <div className="column">
              <div className="box-content">
                <div className="box">* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease</div>
                <div className="text">
                  The FDA plays a specific role in regulating the nutraceutical industry. <span>Learn More.</span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
