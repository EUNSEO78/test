import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { PiTelegramLogoLight } from "react-icons/pi";

const InteractiveIcons = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="p-2 flex items-center justify-evenly text-2xl">
      <div className="flex flex-1 items-center gap-2">
        {isLike ? (
          <IoMdHeart onClick={() => setIsLike(!isLike)} />
        ) : (
          <IoMdHeartEmpty onClick={() => setIsLike(!isLike)} />
        )}
        <GoComment />
        <PiTelegramLogoLight />
      </div>
      <div className="flex flex-1 justify-center">
        <BsThreeDots />
      </div>
      <div className="flex flex-1 justify-end">
        <CiBookmark />
      </div>
    </div>
  );
};

export default InteractiveIcons;
