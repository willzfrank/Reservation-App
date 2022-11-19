import React from "react";
import { NavbarContainer, NavbarLists } from "./NavbarStyles";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

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
          <li>
            <HotelIcon />
            Stays
          </li>
          <li>
            <FlightIcon />
            Flights
          </li>
          <li>
            <CarRentalIcon /> Car Rentals
          </li>
          <li>
            <AttractionsIcon /> Attractions
          </li>
          <li>
            <LocalTaxiIcon /> Airport Taxis
          </li>
        </ul>
      </NavbarLists>
    </NavbarContainer>
  );
};

export default Navbar;
