/** @format */

import { useState } from "react";
import menu from "../assets/menu.png";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  return (
    <>
      <div className="w-11/12 flex justify-between items-center md:w-10/12 absolute top-5 left-1/2 -translate-x-1/2 z-20">
        <img
          src="https://goodsmileshop.com/medias/sys_master/images/images/h15/h37/8880698064926.png"
          alt="logo"
        />
        <div className="lg:w-[350px] hidden md:block md:w-[220px]">
          <ul className="flex justify-around items-center">
            <li className="text-white relative cursor-pointer group">
              Home
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="text-white relative cursor-pointer group">
              About
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="text-white relative cursor-pointer group">
              Contact
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="text-white relative cursor-pointer group">
              Cart
              <div className="absolute inset-x-0 bottom-0 w-full h-0.5 bg-orange-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
          </ul>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          <p className="text-white text-sm hover:text-orange-400 cursor-pointer">
            LOG IN
          </p>
          <button className="bg-orange-400 px-5 py-3 text-white text-sm hover:bg-orange-500">
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

// <div className="flex">
//   <img src={signIn} alt="sign in" className="w-6 mr-5 md:mr-7" />
//   <img src={cart} alt="cart" className="w-6 mr-5 md:mr-7" />
//   <img
//     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nO3WsQkAMAwDQe2/dALuXIVUBnMHGkDdJwBAOUuWNUcAAOBpulplfGQ8AAC/pvNbxkfGA0CaC2n/KuSsP4fKAAAAAElFTkSuQmCC"
//     alt="menu"
//     className="w-5"
//   />
// </div>;
