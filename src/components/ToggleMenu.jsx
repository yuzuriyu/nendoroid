/** @format */

import { useContext } from "react";
import close from "../assets/close.png";
import theme from "../assets/theme.png";
import { ThemeContext } from "../context/ThemeContext";

const ToggleMenu = (props) => {
  const { setTheme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="w-11/12 absolute top-0 right-0 bg-orange-400 h-screen z-50 dark:bg-custom1">
      <div className="flex items-center justify-end w-11/12 m-auto pt-5">
        <img
          src={theme}
          alt="theme"
          className="w-8 mr-4"
          onClick={() => changeTheme()}
        />
        <img
          src={close}
          alt="close"
          className="w-8"
          onClick={() => props.handleToggleMenu()}
        />
      </div>
      <ul className="text-center">
        <li className="text-white py-3">Home</li>
        <li className="text-white py-3">About</li>
        <li className="text-white py-3">Contact</li>
        <li className="text-white py-3">Cart</li>
      </ul>
    </div>
  );
};

export default ToggleMenu;
