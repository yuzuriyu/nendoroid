/** @format */

import { Link } from "react-router-dom";
import { useRef } from "react";
import Products from "./Products";

const Hero = () => {
  const productsRef = useRef(null);

  const hideProducts = true;

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-11/12 m-auto relative md:flex md:w-10/12 lg:flex md:gap-20 lg:gap-52 py-16">
        <div className="flex flex-col md:flex-row gap-20 z-30 md:w-1/2">
          <div className="w-full">
            <h1 className="text-4xl font-playfair dark:text-white">
              Exquisite Miniature Marvels: Elevate Your Collection with the
              Pinnacle of Nendoroid Craftsmanship.
            </h1>
            <p className=" pt-8 pb-10 text-lg dark:text-white">
              Where Artistry Meets Play: Discover the Epitome of Nendoroid
              Excellence, Each Figurine a Symphony of Precision and Charm.
            </p>
            <div className="flex items-center">
              <button
                className="bg-orange-400 px-12 py-4 text-white hover:bg-orange-500 rounded-lg mr-4"
                onClick={() => scrollToProducts()}
              >
                Show Now
              </button>
              <Link
                to={"/cart"}
                className="flex items-center group relative cursor-pointer"
              >
                <p className="mr-2 dark:text-white">Cart</p>
                <p className="text-2xl group-hover:translate-x-2 ease-in-out duration-300 transition dark:text-white">
                  →
                </p>
                <div className="border-b dark:border-white border-black absolute left-0 bottom-0 w-0 h-1 transition-all ease-in-out duration-300 group-hover:w-full"></div>
              </Link>
            </div>
            <div className="w-full m-auto border-2 rounded-lg border-black py-8 px-8 flex mt-10 dark:border-white ">
              <div>
                <h1 className="text-3xl mr-7 dark:text-white">100k</h1>
              </div>
              <div>
                <p className="dark:text-white">
                  We are proud to announce that we now employ a workforce of
                  over <span className="font-bold">100, 000</span>. It is all
                  possible thanks to you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 h-[550px] md:w-1/2 mt-10 md:mt-0">
          <Link
            to={"/about"}
            className="row-start-1 row-end-3 rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://mfiles.alphacoders.com/964/964607.png"
              alt=""
              className="h-full w-full object-cover absolute group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white w-10/12 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg py-4 px-4 group-hover:-translate-y-4 transition-transform duration-300 ease-in-out">
              <h1 className="font-bold">About</h1>
              <p className="text-xs text-gray-500">Corporate Narrative</p>
            </div>
          </Link>
          <Link
            to={"/contact"}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://img.goodfon.com/wallpaper/nbig/4/70/fubuki-shirakami-virtualnyi-iutuber-hololive-holo-no-graffit.jpg"
              alt=""
              className="h-full w-full object-cover absolute group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white w-10/12 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg py-4 px-4 group-hover:-translate-y-4 transition-transform duration-300 ease-in-out">
              <h1 className="font-bold mb-1">Contact</h1>
              <p className="text-xs text-gray-500">Communication Link</p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img
              src="https://e0.pxfuel.com/wallpapers/315/680/desktop-wallpaper-tokoyami-towa.jpg"
              alt=""
              className="h-full w-full object-cover absolute group-hover:scale-125 transition-transform duration-300 ease-in-out"
            />
            <div className="bg-white w-10/12 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg py-4 px-4 group-hover:-translate-y-4 duration-300 transition-transform ease-in-out">
              <h1 className="font-bold mb-1">Blog</h1>
              <p className="text-xs text-gray-500">Insights Archive</p>
            </div>
          </Link>
        </div>
      </div>

      <Products productsRef={productsRef} scrollToProducts={scrollToProducts} />
    </>
  );
};

export default Hero;
