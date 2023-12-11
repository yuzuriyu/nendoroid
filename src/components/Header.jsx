/** @format */

import { useState, useEffect } from "react";
import menuLight from "../assets/menu--light.png";
import ToggleMenu from "./ToggleMenu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo--dark.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import menuDark from "../assets/menu--dark.png";
import userTemp from "../assets/userTemp--dark.png";

import { auth } from "../config/firebase";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [userDisplayName, setUserDisplayName] = useState(null);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    const fetchUserPhotoURL = async () => {
      try {
        if (auth.currentUser) {
          // If currentUser is available, fetch the photoURL
          setUserPhotoURL(auth.currentUser.photoURL || null);
        } else {
          // If currentUser is not available (user not logged in), set photoURL to null
          setUserPhotoURL(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to fetch user data
    fetchUserPhotoURL();
  }, [auth.currentUser]); // Re-run the effect when auth.currentUser changes

  useEffect(() => {
    const fetchUserDisplayName = async () => {
      try {
        if (auth.currentUser) {
          // If currentUser is available, fetch the photoURL
          setUserDisplayName(auth.currentUser.displayName || null);
        } else {
          // If currentUser is not available (user not logged in), set photoURL to null
          setUserDisplayName(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to fetch user data
    fetchUserDisplayName();
  }, [auth.currentUser]);
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
        <div className="flex items-center">
          <div className="mr-4">
            {theme === "dark" ? (
              <img
                src={menuLight}
                alt="menu"
                className="w-9 cursor-pointer"
                onClick={() => handleToggleMenu()}
              />
            ) : (
              <img
                src={menuDark}
                alt="menu"
                className="w-9 cursor-pointer"
                onClick={() => handleToggleMenu()}
              />
            )}
          </div>
          <div className="flex items-center w-11/12 justify-between m-auto">
            <div className="flex items-center">
              {userPhotoURL ? (
                <img
                  src={userPhotoURL}
                  alt="theme"
                  className="w-10 rounded-full"
                />
              ) : (
                <img src={userTemp} alt="theme" className="w-7 rounded-full" />
              )}
              {userDisplayName ? (
                <p className="text-black hidden">
                  {auth.currentUser.displayName}
                </p>
              ) : (
                <p></p>
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
