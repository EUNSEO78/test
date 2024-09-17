import { useState } from "react";

const Count = () => {
  // react: props + state (상태)
  // useState(초깃값)
  const [num, setnum] = useState(1);
  const [fruits, setFruits] = useState("🍒");

  const changeNum = () => {
    setnum(num + 1);
  };

  const changeFruits = () => {
    setFruits(fruits === "🍒" ? "🍓" : "🍒");
  };
  return (
    <>
      <div onClick={changeNum}>{num}</div>
      <div onClick={changeFruits}>{fruits}</div>
    </>
  );
};

export default Count;
