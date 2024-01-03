/** @format */

import { useContext, useEffect, useState } from "react";
import close from "../assets/close.png";
import theme from "../assets/theme.png";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import logoutIcon from "../assets/logoutIcon.png";
import homeIcon from "../assets/home--light.png";
import cartIcon from "../assets/cartIcon.png";
import loginIcon from "../assets/login--light.png";
import { signOut } from "firebase/auth";
import logo from "../assets/logo--dark.png";
import blogIcon from "../assets/blog--light.png";
import aboutIcon from "../assets/about--light.png";
import contactIcon from "../assets/contact--light.png";

const ToggleMenu = (props) => {
  const { setTheme, changeTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-11/12 absolute top-0 right-0 bg-orange-400 h-screen z-50 rounded-l-lg md:w-1/2 lg:w-1/4">
      <div className="flex items-center justify-between w-11/12 m-auto pt-5 mb-4">
        <img src={logo} alt="" className="w-36" />
        <img
          src={close}
          alt="close"
          className="w-6 cursor-pointer"
          onClick={() => props.handleToggleMenu()}
        />
      </div>

      <div className="w-9/12 m-auto relative mt-10">
        <div>
          {!auth.currentUser && (
            <Link to={"/login"} className="flex items-center">
              <div>
                <img src={loginIcon} alt="home icon" className="w-7 mr-4" />
              </div>
              <p className="text-white py-3 text-center">Login</p>
            </Link>
          )}
          <Link to={"/"} className="flex items-center">
            <div>
              <img src={homeIcon} alt="home icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">Home</p>
          </Link>
          <Link to={"/about"} className="flex items-center">
            <div>
              <img src={aboutIcon} alt="home icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">About</p>
          </Link>
          <Link to={"/contact"} className="flex items-center">
            <div>
              <img src={contactIcon} alt="home icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">Contact</p>
          </Link>
          <Link to={"/cart"} className="flex items-center">
            <div>
              <img src={cartIcon} alt="cart icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">Cart</p>
          </Link>
          <Link to={"/blog"} className="flex items-center">
            <div>
              <img src={blogIcon} alt="cart icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">Blog</p>
          </Link>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => changeTheme()}
          >
            <div>
              <img src={theme} alt="theme icon" className="w-7 mr-4" />
            </div>
            <p className="text-white py-3 text-center">Dark Mode</p>
          </div>
          {auth.currentUser && (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => signOutUser()}
            >
              <div>
                <img src={logoutIcon} alt="logout icon" className="w-6 mr-4" />
              </div>
              <p className="text-white py-3 text-center">Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
