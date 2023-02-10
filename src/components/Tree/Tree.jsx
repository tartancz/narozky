import React, { useState } from "react";
import treeImage from "./tree-image.png";
import Cherry from "../Cherry/Cherry";
import Basket from "../basket/Basket";
import "./tree.css";
import { Draggable, Droppable } from "react-drag-and-drop";
import Blahoprani from "../Blahoprani/blahoprani";

export default function Tree() {
  const [cherrys, SetCherrys] = useState(generateCherrys());

  function generateCherrys() {
    var cherrys_list = [];
    for (let i = 0; i < 40; i++) {
      var posX = Math.floor(Math.random() * (35 - 10 + 1)) + 10 - i;
      var posY = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
      cherrys_list.push({ x: posX, y: posY, key: i, collected: false });
    }
    return cherrys_list;
  }
  function handleDrop(e) {
    let id = e["cherry"];
    let tempCherry = [...cherrys];
    tempCherry[id]["collected"] = true;
    SetCherrys(tempCherry);
  }

  if (cherrys.filter((e) => e["collected"] == false).length != 0) {
    return (
      <div style={{ display: "flex" }}>
        <div className="parent" style={{ display: "flex" }}>
          <img src={treeImage} className={"tree"} />
          {cherrys.map(({ x, y, key, collected }) => (
            <Cherry x={x} y={y} key={key} id={key} collected={collected} />
          ))}
          <Droppable types={"cherry"} onDrop={handleDrop}>
            <Basket />
          </Droppable>
        </div>
        <div>
          <h1>
            tresne zbyvajici utrhnout:{" "}
            {cherrys.filter((e) => e["collected"] == false).length}
          </h1>
        </div>
      </div>
    );
  } else {
    return <Blahoprani></Blahoprani>
  }
}
