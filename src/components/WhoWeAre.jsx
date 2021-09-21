import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";
import img from "../images/home-feat-dyson.jpg";
import Container from "./Container";
const WhoWeAre = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const circle = entry.target.querySelector(".content-link");

        if (entry.isIntersecting) {
          circle.classList.add("view");
          document.querySelector(".who-container").classList.add("animation");
          return;
        }
      });
    });

    observer.observe(document.querySelector(".who-container"));
  }, []);
  return (
    <Container>
      <div className="who-container">
        <div className="sub-container">
          <div className="column">
            <img src={img} alt="" />
          </div>
          <div className="column">
            <div className="content">
              <div>
                <h2>We're not about pseudoscience and half-truths</h2>
                <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need. </p>
              </div>
              <div className="content-link">
                <a className="link-underline" href="#home">
                  Who We Are
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
