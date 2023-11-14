/** @format */

import React, { useState, useEffect } from "react";
import search from "../assets/search.png";
import { carouselData } from "../carouselData";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = carouselData.map((data) => data.image);

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
    }, 3000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="mt-20 w-11/12 m-auto md:w-10/12">
      <div className="flex mb-5 w-2/3 md:w-1/3 rounded-lg overflow-hidden">
        <input
          type="text"
          className="flex-1 border-2 placeholder:pl-2 rounded-lg rounded-r-none"
          placeholder="Search"
        />
        <div className="bg-orange-400 px-2 py-2">
          <img src={search} alt="search" className="w-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 bg-orange-400 gap-3 m-auto p-3 md:grid-cols-4 rounded-lg relative">
        <div className="rounded-lg overflow-hidden col-start-1 col-end-3 relative">
          <img
            src={images[currentIndex]}
            alt={`image ${currentIndex + 1}`}
            className="w-full h-full"
          />
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between">
            <button onClick={prevImage} className="bg-white p-2">
              &#8249;
            </button>
            <button onClick={nextImage} className="bg-white p-2">
              &#8250;
            </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://goodsmileshop.com/medias/sys_master/images/images/h11/had/9534419107870.jpg"
            alt="display image 1"
            className="object-cover w-full"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://goodsmileshop.com/medias/sys_master/images/images/h54/hef/9532242788382.jpg"
            alt="display image 2"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
