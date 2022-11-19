import React from "react";
import { NavbarContainer, NavbarLists } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="Navbar--top">
        <h2>OutsideBookings</h2>
        <div className="Navbar--top--right">
          <div className="Nav--btn">Register</div>
          <div className="Nav--btn">Login</div>
        </div>
      </div>

      <NavbarLists>
        <ul>
          <li>Stays</li>
          <li>Flights</li>
          <li>Car Rentals</li>
          <li>Attractions</li>
          <li>Airport Taxis</li>
        </ul>
      </NavbarLists>
    </NavbarContainer>
  );
};

export default Navbar;
