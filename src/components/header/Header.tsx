import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header
      className="has-background-warning-dark p-1
      is-flex is-flex-direction-row is-justify-content-space-between"
    >
      <div>
        <Link to="/home">
          <img src="logo192.png" className="image is-32x32" />
        </Link>
      </div>

      <h2 className="is-flex-grow-1 title has-text-centered has-text-primary-light mb-0">
        {title}
      </h2>
      <div className="is-flex is-align-items-center p-1">
        <Link to="/settings">
          <i className="fas fa-cog has-text-white is-size-4"></i>
        </Link>
      </div>
    </header>
  );
}
