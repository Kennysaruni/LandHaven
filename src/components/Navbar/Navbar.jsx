import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        {/* <Link to="/"> */}
          <h2 className="logo">Land Haven</h2>
        {/* </Link> */}
        {/* <div className="nav-items">
          <a href="" className="">
            Delivery
          </a>
          <a href="" className="">
            Pickup
          </a>
        </div> */}
      </div>

      <div className="last-items">
        <input type="text" placeholder="Search" />
        <button className="cart">Cart</button>
      </div>
    </div>
  );
}

export default Navbar;
