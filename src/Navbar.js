import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='black'?'white':'black'}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode==='black'?'white':'black'}`} href="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.mode==='black'?'white':'black'}`}
                  aria-current="page"
                  to="/"
                >
                  {props.HomeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='black'?'white':'black'}`} to="/about">
                  {props.AboutText}
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch" onClick={props.toggleMode}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkNativeSwitch"
                switch
              />
              <label className="form-check-label" for="checkNativeSwitch">
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}





Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  HomeText: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
};
