/** @format */

import { useState } from "react";
import menu from "../assets/menu--light.png";
import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo--dark.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import menuOrange from "../assets/menu.png";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  return (
    <>
      <div className="w-11/12 flex justify-between items-center md:w-10/12 py-5 m-auto">
        <Link to={"/"}>
          {theme === "dark" ? (
            <img src={logoDark} alt="logo" className="w-[150px]" />
          ) : (
            <img src={logo} alt="logo" className="w-[150px]" />
          )}
        </Link>

        <div className="">
          {theme === "dark" ? (
            <img
              src={menu}
              alt="menu"
              className="w-7 cursor-pointer"
              onClick={() => handleToggleMenu()}
            />
          ) : (
            <img
              src={menuOrange}
              alt="menu"
              className="w-7 cursor-pointer"
              onClick={() => handleToggleMenu()}
            />
          )}
        </div>
      </div>
      {isToggleMenuOpen && <ToggleMenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;
