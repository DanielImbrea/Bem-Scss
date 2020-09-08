import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="icons__inner">
          <p>Q</p>
          <p>T</p>
          <p>O</p>
          <p>L</p>
        </div>
      </div>
      <div className="header__navbar">
        <div className="navbar__icon">Dani</div>
        <div className="navbar__links">
          <a href="#">News</a>
          <a href="#">Events</a>
          <a href="#">MIC Development</a>
          <a href="#">MIC Display Centre</a>
          <a href="#">Download Centre</a>
          <a href="#">Contact and Enquiry</a>
        </div>
      </div>
      <div className="header__video">
        <iframe
          title="samurai"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </div>
    </div>
  );
};

export default Header;
