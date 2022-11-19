import React from "react";
import { HeaderContainer } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>A lifetime of discounts? it`s Genius.</h1>
      <p>
        Get rewarded for your travels - umlock instant savings of 10% or more
        with a free OutsidersBooking account.
      </p>
      <div className="header--btn">Sign in / Register</div>
    </HeaderContainer>
  );
};

export default Header;
