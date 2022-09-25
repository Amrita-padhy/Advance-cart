import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* <span> context Api tuitorial</span> */}
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
