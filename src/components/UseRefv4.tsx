import React, { useState } from "react";
import { myStylesReact } from "../styles/myStylesReact";

const UseRefv4: React.FC<any> = () => {
  const [styleUnderline, setStyleUnderline] = useState("");
  const [stateColor, setStateColor] = useState("");

  return (
    <>
      <div style={myStylesReact.container}>test style</div>
      <div style={myStylesReact.exampleStyle}>test style</div>
      <div className={styleUnderline}>text</div>
      <button onClick={() => setStyleUnderline("")}>No Underline</button>
      <button onClick={() => setStyleUnderline("underlineText")}>
        Underline
      </button>
      <div style={myStylesReact.body}>test style</div>
      <div className="webStyle">test style</div>
      <div className={stateColor}>text</div>
      <button onClick={() => setStateColor("")}>No Underline</button>
      <button onClick={() => setStateColor("backgroundText")}>Underline</button>
    </>
  );
};

export default UseRefv4;
