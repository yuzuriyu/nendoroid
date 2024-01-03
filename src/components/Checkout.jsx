import React, { useContext, useEffect, useState } from "react";
import banner from "../assets/checkout--banner.jpg";
import { ProductContext } from "../context/ProductContext";
import { CountryContext } from "../context/CountryContext";

export default function Checkout() {
  const [countriesName, setCountriesName] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const { countries } = useContext(CountryContext);
  const { cart, total, quantities } = useContext(ProductContext);
  console.log(cart, total);

  useEffect(() => {
    const names = countries.map((country) => country.name.common);
    setCountriesName(names);
  }, [countries]);

  return (
    <>
      <div className="relative h-[316px] w-full">
        <img
          src="https://en.free-wallpapers.su/data/media/3/big/anm8058.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-playfair text-white">Checkout</h1>
        </div>
      </div>
      <h1 className="text-3xl mb-8 pt-20 md:w-10/12 m-auto w-11/12 dark:text-white">
        Billing details
      </h1>
      <div className="w-11/12 m-auto md:w-10/12 md:flex gap-24 pb-20">
        <div className="flex flex-col md:flex-row  md:w-1/2 m-auto gap-20">
          <div className="w-full flex flex-col md:w-full">
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="w-full flex flex-col">
                <p className="text-sm mb-2 dark:text-white">First Name</p>
                <input
                  type="text"
                  className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm flex-1"
                />
              </div>
              <div className="w-full flex flex-col">
                <p className="text-sm mb-2 dark:text-white">Last Name</p>
                <input
                  type="text"
                  className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
                />
              </div>
            </div>
            <p className="text-sm mb-2 dark:text-white">{`Company Name (Optional)`}</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Country / Region</p>
            <select
              id="countrySelect"
              name="country"
              className="py-4 px-4 border  rounded-lg text-sm mb-4"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {countriesName.map((countryName, index) => (
                <option key={index} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
            <p className="text-sm mb-2 dark:text-white">Street Address</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Town / City</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Province</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Zip Code</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Phone</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <p className="text-sm mb-2 dark:text-white">Email address</p>
            <input
              type="text"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
            <textarea
              type="text"
              placeholder="Additional Information"
              className="border rounded-lg px-4 py-4 mb-4 placeholder:text-sm"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-xl mb-2 dark:text-white">Product</h1>
          {cart.map((data, index) => (
            <div className="flex items-center">
              <p className="text-gray-500 text-xs py-1 dark:text-white mr-2">
                {data.name}
              </p>
              <p className="text-xs text-gray-500 mr-2">x</p>
              <p className="text-xs text-gray-500"> {quantities[data.id]} </p>
            </div>
          ))}
          <div className="flex justify-between my-2 border-b-2 pb-4 items-center">
            <p className="text-sm dark:text-white">Total</p>
            <p className="text-gold text-xl font-bold dark:text-white">
              ¥{total}
            </p>
          </div>
          <div className="flex items-center my-4">
            <input type="radio" name="dbt" />
            <label
              htmlFor="dbt"
              className="text-xs ml-2 text-black dark:text-white"
            >
              Direct Bank Transfer
            </label>
          </div>
          <p className="text-xs text-gray-500 mb-4 tracking-wide dark:text-white">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div className="flex items-center my-2">
            <input type="radio" name="dbt" />
            <label
              htmlFor="dbt"
              className="text-xs ml-2 text-gray-500 dark:text-white"
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="flex items-center my-2">
            <input type="radio" name="dbt" />
            <label
              htmlFor="dbt"
              className="text-xs ml-2 text-gray-500 dark:text-white"
            >
              Cash on Delivery
            </label>
          </div>

          <p className="text-xs mt-4 tracking-wide dark:text-white">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-bold">privacy policy</span>
          </p>
          <button className="border rounded-lg px-12 py-2 border-black m-auto block my-8 dark:border-white dark:text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
