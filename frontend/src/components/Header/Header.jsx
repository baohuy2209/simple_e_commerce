import React from "react";
import { House, BookA, ShoppingCart } from "lucide-react";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src="/clothes_logo.png" alt="Logo" />
      </div>
      <div>
        <ul className="header__content">
          <li>
            <a href="/">
              Home
              <House />
            </a>
          </li>
          <li>
            <a href="about">
              About us
              <BookA />
            </a>
          </li>
          <li>
            <a href="/cart">
              Cart
              <ShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
