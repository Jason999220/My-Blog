import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import Online from "./Online";

export default function Nav() {
  return (
    <div className="nav-layout">
      {/* Logo */}
      {/* nav */}
      <nav>
        <Link to="/" className="link-title">
          Home
        </Link>
        <Link to="/about" className="link-title">
          About
        </Link>
        <Link to="/project" className="link-title">
          Project
        </Link>
        <Link to="/leetcode" className="link-title">
          Leetcode
        </Link>
        <Online />
      </nav>
    </div>
  );
}
