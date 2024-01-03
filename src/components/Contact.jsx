import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import locationDark from "../assets/location--dark.png";
import locationLight from "../assets/location--light.png";
import banner from "../assets/contact--banner.png";
import phoneDark from "../assets/phone--dark.png";
import phoneLight from "../assets/phone--light.png";
import timeDark from "../assets/time--dark.png";
import timeLight from "../assets/time--light.png";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="relative h-[316px]">
        <img src={banner} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-playfair text-white">Contact</h1>
        </div>
      </div>
      <div className="w-11/12 m-auto py-10 md:w-10/12">
        <div className="lg:w-1/2 m-auto py-10">
          <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
            Get In Touch With Us
          </h1>
          <p className="text-sm text-gray-500 text-center dark:text-white">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row py-20 md:w-10/12 m-auto gap-20">
          <div className="grid grid-cols-1 gap-8 md:w-1/2 h-[250px]">
            <div className="flex">
              <div className="mr-4">
                <img
                  src={theme === "dark" ? locationLight : locationDark}
                  alt=""
                  className="w-6"
                />
              </div>
              <div>
                <p className="font-bold dark:text-white">Address</p>
                <p className="text-sm dark:text-white">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <img
                  src={theme === "dark" ? phoneLight : phoneDark}
                  alt=""
                  className="w-6"
                />
              </div>
              <div>
                <p className="font-bold dark:text-white">Phone</p>
                <p className="text-sm dark:text-white">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-sm dark:text-white">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <img
                  src={theme === "dark" ? timeLight : timeDark}
                  alt=""
                  className="w-6"
                />
              </div>
              <div>
                <p className="font-bold dark:text-white">Working Time</p>
                <p className="text-sm dark:text-white">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-sm dark:text-white">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:w-1/2">
            <p className="text-sm mb-2 dark:text-white">Your Name</p>
            <input
              type="text"
              placeholder="Abc"
              className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Email address</p>
            <input
              type="text"
              placeholder="Abc@gmail.com"
              className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Subject</p>
            <input
              type="text"
              placeholder="This is optional"
              className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Message</p>
            <textarea
              type="text"
              placeholder="Hi! I'd like to ask about"
              className="border rounded-lg px-4 py-4 mb-4 flex-1 placeholder:text-sm"
            />
            <button className="bg-orange-400 text-white px-7 py-3 mt-4 rounded-lg w-[200px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
