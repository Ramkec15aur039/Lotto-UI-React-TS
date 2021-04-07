import React from "react";

export default function Navbar(props:any) {
  return (
    <section className="navSection bg-light">
      <nav className="navbar container navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Lotto 60
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse customNavLink"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fund
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="customMarginButton mt-sm-2">
                <button className="navbar-brand btn btn-primary btnFontStyle">
                  Play for jackpot
                </button>
                <button className="navbar-brand btn btn-primary btnFontStyle">
                  Play for fun
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
