import { useState } from "react";
import {
  HeaderContainer,
  HeaderSearchContainer,
  HeaderContainerContent,
} from "./HeaderStyles";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Groups2Icon from "@mui/icons-material/Groups2";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Handle increment and decrement
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <HeaderContainerContent>
      <HeaderContainer>
        <h1>A lifetime of discounts? it`s Genius.</h1>
        <p>
          Get rewarded for your travels - umlock instant savings of 10% or more
          with a free OutsidersBooking account.
        </p>
        <div className="header--btn">Sign in / Register</div>
      </HeaderContainer>
      <HeaderSearchContainer>
        <div className="headerSearchBox">
          <HotelIcon />
          <input
            type="text"
            name=""
            id=""
            placeholder="Where are you going?"
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchBox">
          <CalendarMonthIcon />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}  `}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="headerSearchBox">
          <Groups2Icon />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >
            {`${options.adult} Adult - ${options.children} Children - ${options.room}  Room`}
          </span>
          {openOptions && (
            <div className="options">
              <div className="optionsItem">
                <span className="optionText">Adult</span>
                <div className="optionItemContainer">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                    disabled={options.adult <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionItemContainer">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                    disabled={options.children <= 0}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Room</span>
                <div className="optionItemContainer">
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                    disabled={options.room <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchBox">
          <button className="headerBtn">Search</button>
        </div>
      </HeaderSearchContainer>
    </HeaderContainerContent>
  );
};

export default Header;
