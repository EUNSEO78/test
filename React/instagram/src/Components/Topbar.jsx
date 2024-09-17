import { BiNavigation } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import Icon from "./Icon";

const Topbar = () => {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA", borderBottom: "1px solid #f0f0f0" }}
      className="w-full flex justify-between items-center"
    >
      <Icon IconComponent={FiCamera} hasWidth={false} />
      <div style={{ width: "105px", height: "30px" }}>
        <img
          className="w-full h-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <div className="flex items-center ">
        <Icon IconComponent={PiTelevisionSimpleBold} hasWidth={false} />
        <Icon IconComponent={BiNavigation} hasWidth={false} />
      </div>
    </div>
  );
};

export default Topbar;
