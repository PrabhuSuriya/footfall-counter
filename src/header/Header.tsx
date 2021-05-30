import React from "react";

function Header({ title }) {
  return (
    <header
      className="has-background-warning-dark p-1
      is-flex is-flex-direction-row is-justify-content-space-between"
    >
      <div>
        <img src="logo192.png" className="image is-32x32" />
      </div>

      <h2 className="is-flex-grow-1 title has-text-centered has-text-primary-light mb-0">
        {title}
      </h2>
      <div className="is-flex is-align-items-center p-1">
        <i className="fas fa-cog has-text-white is-size-4"></i>
      </div>
    </header>
  );
}

export default Header;
