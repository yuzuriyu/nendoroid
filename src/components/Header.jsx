/** @format */

import { useState } from "react";
import menu from "../assets/menu.png";
import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  return (
    <>
      <div className="w-11/12 flex justify-between items-center md:w-10/12 absolute top-5 left-1/2 -translate-x-1/2 z-20">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[75px]"/>
        </Link>
        <div className="md:w-[150px] hidden md:block">
          <ul className="flex justify-around items-center">
            <Link to={"/"} className=" relative cursor-pointer group">
              Home
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
            <Link to={"/cart"} className=" relative cursor-pointer group">
              Cart
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          </ul>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          <Link to={"/login"} className=" text-sm hover:text-orange-400 cursor-pointer">
            LOG IN
          </Link>
          <button className="bg-orange-400 px-5 py-3 text-white text-sm hover:bg-orange-500 rounded-lg">
            GET STARTED
          </button>
        </div>
        <div className="md:hidden">
          <img
            src={menu}
            alt="menu"
            className="w-7"
            onClick={() => handleToggleMenu()}
          />
        </div>
      </div>
      {isToggleMenuOpen && <ToggleMenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;
