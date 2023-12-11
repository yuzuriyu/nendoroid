import React from "react";
import errorWallpaper from "../assets/errorWallpaper.jpg";
import logo from "../assets/logo--dark.png";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 w-full h-screen flex">
      <div className="w-10/12 m-auto relative h-5/6 flex justify-center">
        <img
          src={errorWallpaper}
          alt="wallpaper"
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="relative z-10 md:w-7/12 w-11/12">
          <img src={logo} alt="logo" className="w-[200px] py-10 m-auto" />
          <h1 className="text-white text-8xl text-center">404</h1>
          <p className="text-white text-center">
            Oops! It looks like the page you're trying to reach doesn't exist or
            there's been an issue. Please visit the buttons below.
          </p>
          <div className="flex justify-center my-4 flex-col gap-4  md:flex-row">
            <Link to={"/"} className="md:w-1/2">
              <button className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 py-2 px-5 text-white rounded-full w-full">
                GO TO HOME
              </button>
            </Link>

            <button
              className="border-2 border-orange-400 text-white rounded-full px-5 py-2 w-full md:w-1/2"
              onClick={() => goBack()}
            >
              PREVIOUS PAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
