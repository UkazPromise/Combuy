import React from "react";
import Search from "./Search"
const Header = () => {
  let Links = [
    {name:"HOME",link:"/"},          
    {name:"Partner With Us",link:"/"},
    {name:"Shop",link:"/"},
    {name:"Contact",link:"/"},
    {name:"About Us",link:"/"},
  ];
  return (
    <div className="flex justify-center shadow-md w-full h-24 fixed top-0 left-0">
      <div className="md:flex w-full items-center justify-between bg-white md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] tray-gray-800">
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
        {
          Links.map((link)=>(
            <li key={link.name} className="md:ml-8 text-x1">
              <a href={link.link} className="text-gray-800 hover:text-orange-600 duration-500">{link.name}</a>
            </li>
          ))
        }
        </ul> 
      </div>
    </div>
  );
};

export default Header;
