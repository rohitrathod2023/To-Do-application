import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import gridfillIcon from "../../assets/icons/gridfill.svg";
import logoIcon from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import moonIcon from "../../assets/icons/moon-clear-line.svg";
import searchIcon from "../../assets/icons/search.svg";

const CommonNavbar = () => {
  return (
    <div className="navbar-container">
      <Navbar className="bg-body-tertiary">
        <Container>
          <div
            className="navbar-left-part d-flex "
            style={{ cursor: "pointer" }}
          >
            <div className="navbr-menu">
              <img
                src={menuIcon}
                alt="menu-icon"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="navbar-logo">
              <img
                src={logoIcon}
                alt="menu-icon"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="navbar-right-part d-flex">
              <div>
                <img
                  src={searchIcon}
                  alt="search-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <img
                  src={gridfillIcon}
                  alt="grid-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <img
                  src={moonIcon}
                  alt="moon-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CommonNavbar;
