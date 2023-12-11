import contactIcon from "../assets/contact--dark.png";
import locationIcon from "../assets/location--dark.png";
import phoneIcon from "../assets/phone--dark.png";
import contactWhiteIcon from "../assets/contact--light.png";
import locationWhiteIcon from "../assets/location--light.png";
import phoneWhiteIcon from "../assets/phone--light.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-11/12 m-auto py-10 md:w-10/12">
      <div className="flex flex-col gap-10 md:flex-row md:gap-10">
        <div className="md:w-1/2">
          <h1 className="font-bold text-lg border-b-2 border-orange-400 w-28 dark:text-white">
            Contact us
          </h1>
          <p className="text-sm py-2 mb-4 dark:text-white">
            Reach out to us for any inquiry
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="border py-2 px-4 mb-4"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border py-2 px-4 mb-4"
            />
            <textarea placeholder="Message" className="border py-6 px-4 mb-4" />
            <button className="bg-orange-400 text-white py-2 flex-1">
              Submit
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.0986937593243!2d-122.40944052872817!3d37.80884532795025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580fc8bb3211d%3A0xbaf631600de6b39e!2sPIER%2039!5e0!3m2!1sen!2sph!4v1702246331808!5m2!1sen!2sph"
            className="w-full h-96"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-2 py-10 gap-4 md:grid-cols-3">
        <div className="flex">
          <div className="mr-2">
            {theme === "dark" ? (
              <img src={locationWhiteIcon} alt="location icon" />
            ) : (
              <img src={locationIcon} alt="location icon" />
            )}
          </div>
          <div>
            <h1 className="font-bold dark:text-white">Location</h1>
            <p className="text-sm dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-2">
            {theme === "dark" ? (
              <img src={contactWhiteIcon} alt="contact icon" />
            ) : (
              <img src={contactIcon} alt="contact icon" />
            )}
          </div>
          <div>
            <h1 className="font-bold  dark:text-white">Contact</h1>
            <p className="text-sm dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-2">
            {theme === "dark" ? (
              <img src={phoneWhiteIcon} alt="phone icon" />
            ) : (
              <img src={phoneIcon} alt="phone icon" />
            )}
          </div>
          <div>
            <h1 className="font-bold  dark:text-white">Phone</h1>
            <p className="text-sm dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
