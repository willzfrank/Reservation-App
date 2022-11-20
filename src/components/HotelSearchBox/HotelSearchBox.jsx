import { SearchBox } from "./HotelSearchBoxStyles";

const HotelSearchBox = () => {
  return (
    <div>
      <SearchBox>
        <h1>Search</h1>
        <form action="" method="post" className="form">
          <div className="destinationInput">
            <span>Destination</span>
            <input type="text" className="destinationInputBox" />
          </div>

          <div className="checkInInput">
            <span>Check-in-Date</span>
            <div className="checkInContainer">
              <p>04/25/2022 to 04/29/2022</p>
            </div>
            <div className="optionsContainer">
              <h3>Options</h3>
              <div className="optionsContent">
                <span>Min price per night</span>
                <input type="text" />
              </div>
              <div className="optionsContent">
                <span>Max price per night</span>
                <input type="text" />
              </div>
              <div className="optionsContent">
                <span>Adult</span>
                <input type="text" />
              </div>
              <div className="optionsContent">
                <span>Children</span>
                <input type="text" />
              </div>
              <div className="optionsContent">
                <span>Room</span>
                <input type="text" />
              </div>
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
      </SearchBox>
    </div>
  );
};

export default HotelSearchBox;
