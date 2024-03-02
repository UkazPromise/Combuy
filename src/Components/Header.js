import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faShop, faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faHandshake} from "@fortawesome/free-regular-svg-icons";
import Search from "./Search";
import {Tooltip as ReactTooltip} from "react-tooltip";

const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  let Links = [
    { name: "HOME", link: "/", icon: faHouse },
    { name: "Partner With Us", link: "/", icon: faHandshake },
    { name: "Shop", link: "/", icon: faShop },
    { name: "Contact", link: "/", icon: faEnvelope },
    { name: "About Us", link: "/", icon: faInfoCircle },
  ];

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <>
      <ReactTooltip
        place="bottom"
        effect="solid"
        className="bg-gray-800 text-white p-2 rounded"
      />
      <div className="flex justify-center shadow-md w-full h-24 fixed top-0 left-0">
        <div className="md:flex w-full items-center justify-between bg-white md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 pr-4">
            <span className="text-3x1 text-indigo-600 mr-1 pt-2">
              <img src="/img/trolley_4290854.png" alt="combuy" class="w-10 h-10"/>
            </span>
              <span className="text-red-600">C</span>
              <span className="text-blue-600">o</span>
              <span className="text-green-600">m</span>
              <span className="text-yellow-600">B</span>
              <span className="text-orange-600">u</span>
              <span className="text-pink-600">y</span>
          </div>
          <Search />
          <ul className="md:flex md:items-center">
            {Links.map((link) => (
              <li key={link.name} 
                  className="md:ml-8 text-xl" 
                  data-tip={link.name}
                  onMouseEnter={() => handleIconHover(link.name)}
                  onMouseLeave={handleIconLeave} 
                  >
                <a href={link.link} className="text-gray-800 hover:text-orange-600 duration-500">
                  <FontAwesomeIcon icon={link.icon} /> 
                </a>
              </li>
            ))}
          </ul>
          {hoveredIcon && <div className="tooltip">{hoveredIcon}</div>}
        </div>
      </div>
    </>
  );
};

export default Header;
