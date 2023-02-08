import React from "react";
import cherryImage from "./cherry-image.jpg";
import "./cherry.css";
import { Draggable, Droppable } from "react-drag-and-drop";

export default function Cherry({ x, y, id, collected }) {
  x = x.toString() + "vw";
  y = y.toString() + "vh";

  if (collected == false) {
    return (
      <Draggable
        className={"cherryDroppable"}
        style={{ left: x, top: y }}
        type={"cherry"}
        data={id}
      >
        <img src={cherryImage} className={"cherry"} />
      </Draggable>
    );
  } else {
    return (
      <div
        className="cherry cherryDroppable invisBlock"
        style={{ left: x, top: y }}
      ></div>
    );
  }
}
