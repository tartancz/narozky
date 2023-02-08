import React from "react";
import basketImage from "./basket-image.png";
import "./basket.css";

export default function Basket() {
  return (
    <div className="basketWrapper">
      <img src={basketImage} className={"basket"}/>
    </div>
  );
}
