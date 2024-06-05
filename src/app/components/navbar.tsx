import React from "react";
import "../scss/navbar.scss";
import "../hooks/stuff";
import ThemeToggle from "../components/poga";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Logo</div>
      <ul className="navbar-links">
        <li>
          <Link href={"/I-home"}>I posms</Link>
        </li>
        <li>II posms</li>
        <li>III posms</li>
        <li>IV posms</li>
        <li>V posms</li>
      </ul>
      <div className="navbar-mode">
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
};

export default NavBar;
