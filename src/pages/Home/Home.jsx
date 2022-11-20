import React from "react";
import Header from "../../components/Header/Header";
import InputBox from "../../components/ImageBox/ImageBox";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="featured">
        <InputBox />
      </div>
    </div>
  );
};

export default Home;
