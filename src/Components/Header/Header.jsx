import React from "react";
import { Link } from "react-router-dom";
import CommonSelect from "../CommonSelect/CommonSelect";

export default function Header() {
  const navlinks = [
    {
      links: "Home",
      path: "/home",
    },
    {
      links: "About",
      path: "/about",
    },
    {
      links: "Contact",
      path: "/contact",
    },
  ];

  const dataset = [
    {
      name: "profile",
    },
    {
      name: "logout",
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {navlinks.map((item) => (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={item.path}
                >
                  {item.links}
                </Link>
              ))}
            </div>
            <div className="nav-link">
              <CommonSelect dataset={dataset} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
