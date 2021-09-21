import React from "react";
import Container from "./Container";
import img from "../images/Home-Feat-03.jpg";
import "../styles/More.css";
import Icon6 from "../icons/Icon6";
import Icon7 from "../icons/Icon7";
import Icon8 from "../icons/Icon8";
import Icon9 from "../icons/Icon9";
const ListItem = (props) => {
  return (
    <li>
      {props.icon}
      {props.caption}
    </li>
  );
};
const More = () => {
  return (
    <Container>
      <div className="more-container">
        <div className="sub-container-more">
          <div className="column">
            <img src={img} alt="" />
          </div>
          <div className="column">
            <div className="content">
              <div>
                <h2>Clean and simple, delivered</h2>
                <p className="serif">Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual.*</p>
              </div>
              <ul className="list serif">
                <ListItem icon={<Icon6 />} caption="Free Shipping" />
                <ListItem icon={<Icon7 />} caption="Control your delivery date" />
                <ListItem icon={<Icon8 />} caption="Free and easy cancellation" />
                <ListItem icon={<Icon9 />} caption="30-day money back guarantee" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default More;
