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
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" width={200}/></a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled"
                >Disabled</a
                >
              </li> */}
               <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><button type="button" class="btn btn-light">Light</button></a>
              </li>
            </ul>
            <form class="d-flex input-group w-auto">
              <input
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
