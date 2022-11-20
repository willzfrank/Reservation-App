import { HotelListComponentContainer } from "./HotelListComponentStyles";
import eko from "../../assets/Eko-Signature-Signature-Presidential-Suite.webp";

const HotelListComponent = () => {
  return (
    <HotelListComponentContainer>
      <div>
        <img src={eko} alt="" />
      </div>
      <div>
        <div className="top__content">
          <div>
            <h2>Tower Street Apartments</h2>
            <p>500m from center</p>
            <span>Free airport taxi</span>
            <h3>Studio Apartment with Air conditioning</h3>
          </div>
          <div className="bottom__content">
            <div>
              <p>
                Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
              </p>
              <p className="cancellation">Free cancellation</p>
              <p className="cancel">
                You can cancel later, so lock in this great price today!
              </p>
            </div>
            <div>
              <p className="price">$110</p>
              <p className="taxes">Includes taxes and fees</p>
              <button className="availaility-btn">See availability</button>
            </div>
          </div>
          <p>Excellent</p>
          <span>8.9</span>
        </div>
      </div>
    </HotelListComponentContainer>
  );
};

export default HotelListComponent;
