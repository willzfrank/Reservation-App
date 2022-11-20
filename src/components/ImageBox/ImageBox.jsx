import React from "react";
import Nigeria from "../../assets/Nigeria.avif";
import { ImageBox } from "./ImageBoxStyles";

const InputBox = () => {
  return (
    <ImageBox>
      <div className="imageBoxItem">
        <img src={Nigeria} alt="" />
        <div className="imageBoxTitle">
          <h1>Nigeria</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="imageBoxItem">
        <img src={Nigeria} alt="" />
        <div className="imageBoxTitle">
          <h1>Nigeria</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="imageBoxItem">
        <img src={Nigeria} alt="" />
        <div className="imageBoxTitle">
          <h1>Nigeria</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div></div>
    </ImageBox>
  );
};

export default InputBox;
