import React from "react";
import Container from "./Container";
import img1 from "../images/Category-Multivitamin.jpg";
import img2 from "../images/Category-Protein__1_.jpg";
import img3 from "../images/Category-Pregnancy__1_.jpg";
import img4 from "../images/Category-Bundles.jpg";
import Icon1 from "../icons/Icon1";
import Icon2 from "../icons/Icon2";
import Icon3 from "../icons/Icon3";
import Icon4 from "../icons/Icon4";
import Icon5 from "../icons/Icon5";
import "../styles/Shop.css";

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <div className="shop-item_image">
        <img src={props.img} alt="shop" />
      </div>
      <div className="shop-item_caption">{props.caption}</div>
    </div>
  );
};
const Icon = (props) => {
  return (
    <div className="icon">
      {props.icon}
      <div className="icon_caption">{props.caption}</div>
    </div>
  );
};
const Shop = () => {
  return (
    <Container>
      <div className="shop-container">
        <div className="shop-items">
          <ShopItem img={img1} caption="Shop Multivitamin" />
          <ShopItem img={img2} caption="Shop Protien" />
          <ShopItem img={img3} caption="Shop Pregnancy" />
          <ShopItem img={img4} caption="Shop Bundles" />
        </div>
        <div className="daily-essentials">
          <h2>Daily essentials with good intentions — for living life or creating it.</h2>
          <div className="icons-container">
            <Icon icon={<Icon1 />} caption="Traceable Ingredients" />
            <Icon icon={<Icon2 />} caption="Non-GMO" />
            <Icon icon={<Icon3 />} caption="Third Party Tested" />
            <Icon icon={<Icon4 />} caption="Vegan" />
            <Icon icon={<Icon5 />} caption="No Artificial Flavors or Synthetic Fillers" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
