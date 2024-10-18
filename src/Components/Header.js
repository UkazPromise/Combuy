import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faShop, faEnvelope, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import Search from "./Search";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link } from "react-router-dom"; 

const Header = () => {

  const Links = [
    { name: "HOME", link: "/", icon: faHouse },
    { name: "Partner With Us", link: "/", icon: faHandshake },
    { name: "Shop", link: "/shop", icon: faShop },
    { name: "Contact", link: "/contact", icon: faEnvelope },
    { name: "About Us", link: "/about", icon: faInfoCircle },
  ];

  return (
    <>
      <ReactTooltip
        place="bottom"
        effect="solid"
        className="bg-gray-800 text-white p-2 rounded"
      />
      <div className="flex justify-center shadow-md w-full h-24 fixed top-0 left-0 z-50">
        <div className="md:flex w-full items-center justify-between bg-red-500 md:px-10 px-7 z-50">
          <Link to="/">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 pr-4">
              <img src="/img/combuy-logo.png" alt="combuy" className="w-20 h-20" />
            </div>
          </Link>
          <Search />
          <ul className="md:flex md:items-center">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl"
                data-tip={link.name}
              >
                <Link to={link.link} className="text-gray-800">
                  <FontAwesomeIcon icon={link.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
