import React from "react";
import { CgProfile } from "react-icons/cg";
import { TfiTimer } from "react-icons/tfi";
import { MdSportsScore } from "react-icons/md";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Return Journey LLP</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <TfiTimer size="19" />
              {props.timer}secs <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              <MdSportsScore size="18" color="white" />
              {props.score}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              <CgProfile size="18" color="white" />
              {props.name}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  name: "User",
  timer: 40,
  score: 0,
};

export default NavBar;
