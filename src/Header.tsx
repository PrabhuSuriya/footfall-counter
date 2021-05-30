import React from "react";

function Header() {
  return (
    <header
      className="has-background-warning-dark p-1
      is-flex is-flex-direction-row is-justify-content-space-between"
    >
      <img src="logo192.png" className="image is-32x32" />
      <h2 className="title has-text-centered has-text-primary-light">
        Footfall Counter
      </h2>

    </header>
  );
}

export default Header;
