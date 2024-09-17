import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Heart = () => {
  const [isLove, setIsLove] = useState(false);
  const changeLove = () => {
    setIsLove(!isLove);
  };
  return (
    <div onClick={changeLove}>{isLove ? <GoHeartFill /> : <GoHeart />}</div>
  );
};

export default Heart;
