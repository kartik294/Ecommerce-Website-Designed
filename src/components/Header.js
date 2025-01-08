import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="header-border">
        <div className="lorem-text">
          <span className="lorem">Lorem Ipsum Dolor</span>
          <span className="lorem">Lorem Ipsum Dolor</span>
          <span className="lorem">Lorem Ipsum Dolor</span>
        </div>
      </div>
      <div className="container">
        <div className="logo">LOGO</div>
      </div>
      <div className="header-icons">
        <CiSearch />
        <FaRegHeart />
        <FaShoppingBag />
        <FaUser />
        <RiEnglishInput />
      </div>
      <nav>
        <ul className="nav-links">
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
