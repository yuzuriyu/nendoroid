/** @format */

import { useState, useEffect } from "react";
import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo--dark.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import userTempLight from "../assets/tempUser--light.png";
import userTemp from "../assets/userTemp--dark.png";

import { auth } from "../config/firebase";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const [userPhotoURL, setUserPhotoURL] = useState(null);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    const fetchUserPhotoURL = async () => {
      try {
        if (auth.currentUser) {
          setUserPhotoURL(auth.currentUser.photoURL || null);
        } else {
          setUserPhotoURL(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserPhotoURL();
  }, [auth.currentUser]);

  useEffect(() => {
    const fetchUserDisplayName = async () => {
      try {
        if (auth.currentUser) {
          setUserDisplayName(auth.currentUser.displayName || null);
        } else {
          setUserDisplayName(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDisplayName();
  }, [auth.currentUser]);
  return (
    <>
      <div className="w-11/12 flex justify-between items-center md:w-10/12 py-5 m-auto">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? logoDark : logo}
            alt="logo"
            className="w-[150px]"
          />
        </Link>
        <div className="flex items-center">
          <div className="flex items-center w-11/12 justify-between m-auto">
            <div className="flex items-center">
              {userPhotoURL ? (
                <img
                  src={userPhotoURL}
                  alt="theme"
                  className="w-10 rounded-full cursor-pointer"
                  onClick={() => handleToggleMenu()}
                />
              ) : (
                <img
                  src={theme === "dark" ? userTempLight : userTemp}
                  alt="theme"
                  className="w-7 rounded-full cursor-pointer"
                  onClick={() => handleToggleMenu()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isToggleMenuOpen && <ToggleMenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;
