import React, { useState } from "react";
import blahopraniImage from "./blahoprani-image.jfif"

export default function Blahoprani() {
    return (
      <div>
        <h1>Všechno nejlepší</h1>
        <h1>Zde máš virtutalní pětistovku</h1>
        <img src={blahopraniImage} className={"petistovka"} />
        <h1>Kup si za ní třeba virtualní oběd {":)"}</h1>
      </div>
    );

}
