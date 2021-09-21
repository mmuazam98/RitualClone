import React from "react";
import img from "../images/Home-Map.jpg";
import "../styles/Trace.css";
import Container from "./Container";
const Trace = () => {
  return (
    <Container>
      <div className="trace-container">
        <div className="sub-container-trace">
          <div className="column">
            <div className="content">
              <div>
                <h2>You deserve traceability</h2>
                <p>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</p>
              </div>
              <div className="content-link">
                <a className="link-underline" href="#home">
                  Meet Our Ingredients
                </a>
              </div>
              <div className="content-link">
                <a className="link-underline" href="#home">
                  Our Clinical Study
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trace;
