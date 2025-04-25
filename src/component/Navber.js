import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const navLink = [
  { id: "Home", name: "Home", path: "/" },
  { id: "About", name: "About", path: "/about" },
  { id: "Contact", name: "Contact", path: "/contact" }
];

const Navber = () => {
  return (
    <nav className="Menu">
      <ul className="List">
        {navLink.map((nav) => (
          <li key={nav.id}>
            <Link
              to={nav.path}
              href={nav.path}
              exact={true}
              activeClassName="active"
              aria-label={nav.name}
              role="link"
              tabIndex={0}
              key={nav.id}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
