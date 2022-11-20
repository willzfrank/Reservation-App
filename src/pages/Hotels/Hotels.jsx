import React from "react";
import HotelListComponent from "../../components/HotelListComponent/HotelListComponent";
import HotelSearchBox from "../../components/HotelSearchBox/HotelSearchBox";
import { HotelContainer } from "./HotelsStyles";

const Hotels = () => {
  return (
    <HotelContainer>
      <HotelSearchBox />
      <HotelListComponent />
    </HotelContainer>
  );
};

export default Hotels;
