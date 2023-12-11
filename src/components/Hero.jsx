/** @format */

import React, { useState, useEffect, useContext } from "react";
import themeIcon from "../assets/theme.png";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import umaru1 from "../assets/umaru-1.jpg";
import umaru3 from "../assets/umaru-3.jpg";
import umaru4 from "../assets/umaru-4.jpg";
import { auth } from "../config/firebase";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [umaru1, umaru3, umaru4];

  const { changeTheme, theme } = useContext(ThemeContext);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically slide to the next image every 3000 milliseconds (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="h-[83vh] w-full relative">
        <div className=" overflow-hidden w-full relative h-full">
          <img
            src={images[currentIndex]}
            alt={`image ${currentIndex + 1}`}
            className="w-full h-full object-cover -z-10"
          />
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between">
            <button
              onClick={prevImage}
              className="bg-white py-8 px-3 hidden md:block rounded-r-lg"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="bg-white py-8 px-3 hidden md:block rounded-l-lg"
            >
              &#8250;
            </button>
          </div>
          <div className="w-10/12 md:flex justify-end absolute bottom-24 left-1/2 -translate-x-1/2 z-40 hidden">
            <img
              src={themeIcon}
              alt=""
              className={`rounded-full w-16 cursor-pointer ${
                theme === "dark" ? "bg-orange-400" : "bg-custom2"
              }`}
              onClick={() => changeTheme()}
            />
          </div>
        </div>
        <div className="w-11/12 md:w-10/12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-8 z-30">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-playfair">
              Exquisite Miniature Marvels: Elevate Your Collection with the
              Pinnacle of Nendoroid Craftsmanship.
            </h1>
            <p className=" pt-4 pb-7 ">
              Where Artistry Meets Play: Discover the Epitome of Nendoroid
              Excellence, Each Figurine a Symphony of Precision and Charm.
            </p>
            <div className="flex items-center">
              <Link to={"/register"}>
                <button className="bg-orange-400 px-12 py-4 text-white hover:bg-orange-500 rounded-lg mr-4">
                  GET STARTED
                </button>
              </Link>
              {!auth.currentUser && (
                <Link to={"/login"} className="flex items-center group">
                  <p className="underline mr-2">LOGIN</p>
                  <p className=" text-2xl group-hover:translate-x-4 ease-in-out transition">
                    →
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
