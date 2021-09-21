import React, { useEffect, useRef } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import "../styles/Navbar.css";
const Navbar = () => {
  const navbar = useRef(null);
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.pageYOffset === 0) {
        navbar.current.style.borderBottom = "none";
        navbar.current.style.borderTop = "4px solid var(--blue)";
      } else {
        navbar.current.style.borderTop = "4px solid white";
        navbar.current.style.borderBottom = "1px solid rgba(0,0,0,0.2)";
      }
    });
  }, []);
  return (
    <nav ref={navbar}>
      <div className="nav-items">
        <div className="nav-item">Menu</div>
        <div className="nav-item logo">Ritual</div>
        <div className="nav-item nav-item--icon">
          <span>Who We Are</span>
          <AiOutlineShopping />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
