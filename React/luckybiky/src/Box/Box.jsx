import { useState } from "react";

const Box = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const changeBG = () => {
    setBackgroundColor(backgroundColor == "red" ? "blue" : "red");
  };

  const boxStyle = {
    backgroundColor: backgroundColor,
  };

  return <div className="w-24 h-60" onClick={changeBG} style={boxStyle}></div>;
};

export default Box;
