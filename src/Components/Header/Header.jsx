import React from "react";
// import { Link } from "react-router-dom";
import CommonSelect from "../CommonSelect/CommonSelect";
import  { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';


export default function Header() {
  const [navLinks] = useState([
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '#' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            alt=""
            width={50}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 me-auto mb-lg-0 ">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link active" aria-current="page" href={link.link}>
                  {link.text}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <button type="button" className="btn btn-primary">
                  Signup
                </button>
              </a>
            </li>
          </ul>
          {/* <form className="d-flex input-group w-auto"> */}
            {/* <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            /> */}
            {/* <button type="button" className="btn btn-primary">
              Search
            </button> */}
          {/* </form> */}
        </div>
      </div>
    </nav>
    </div>
  );
}

