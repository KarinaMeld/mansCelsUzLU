import React from "react";
import "../scss/navbar.scss";
import "../hooks/stuff";
import ThemeToggle from "../components/poga";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link href={"/"} className="nav-link">
            KarīnaMeldere
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbar-toggle-button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/I"} className="nav-link">
                I posms
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/II"} className="nav-link">
                II posms
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/III"} className="nav-link">
                III posms
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/IV"} className="nav-link">
                IV posms
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/V"} className="nav-link">
                V posms
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/VI"} className="nav-link">
                VI posms
              </Link>
            </li>
          </ul>
          <div className="navbar-mode">
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
