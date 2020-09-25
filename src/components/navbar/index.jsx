import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const LinksToRender = [
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/howitworks",
    name: "How It Works",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const NavbarView = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__container--home">
        <Link to={"/"} className="Navbar__link Navbar__link--home">
          Lopez Handyman
        </Link>
      </div>
      <div className="Navbar__container">
        {LinksToRender.map((item) => (
          <Link to={item.path} className="Navbar__link" key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarView;
