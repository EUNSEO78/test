import { AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";
import Icon from "./Icon";
import Photo from "./PhotoComponents/Photo";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const Navigation = () => {
  return (
    <footer
      style={{ backgroundColor: "#FAFAFA" }}
      className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center"
    >
      <Icon IconComponent={AiOutlineHome} />
      <Icon IconComponent={IoSearchOutline} />
      <Icon IconComponent={AiOutlinePlusSquare} />
      <Icon IconComponent={IoMdHeartEmpty} />
      <Photo size="small" />
    </footer>
  );
};

export default Navigation;
