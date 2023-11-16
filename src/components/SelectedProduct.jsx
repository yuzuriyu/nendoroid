/** @format */

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const SelectedProduct = () => {
  const { selectedProductData } = useContext(ProductContext);
  const [activeButton, setActiveButton] = useState("description");
  const [loading, setLoading] = useState(true);
  console.log(selectedProductData);

  const handleActiveButton = (selected) => {
    setActiveButton(selected);
  };

  useEffect(() => {
    if (selectedProductData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [selectedProductData]);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <div className="w-11/12 m-auto my-24">
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex justify-center py-10 md:w-1/2">
          <img
            src={selectedProductData.image}
            alt="product"
            className="w-[250px]"
          />
        </div>
        <div className="my-2 md:w-1/2">
          <h1 className="font-bold text-lg mb-2 dark:text-white">
            {selectedProductData.name}
          </h1>
          <di className="flex justify-between">
            <h1 className="text-orange-400 text-lg">
              ¥{selectedProductData.price}
            </h1>
            <div className="flex items-center">
              <button className="text-orange-400 border-orange-400 border-2 px-2.5 text-lg">
                -
              </button>
              <p className="mx-2.5 text-xs dark:text-white">1</p>
              <button className="text-orange-400 border-orange-400 border-2 px-2 text-lg">
                +
              </button>
            </div>
          </di>
          <div className="flex justify-between mt-4">
            <p
              className="text-gray-500 dark:text-white"
              onClick={() => handleActiveButton("description")}
            >
              Description
            </p>
            <p
              className="text-gray-500 dark:text-white"
              onClick={() => handleActiveButton("order period")}
            >
              Order Period
            </p>
            <p
              className="text-gray-500 dark:text-white"
              onClick={() => handleActiveButton("specifications")}
            >
              Specifications
            </p>
          </div>
          <div className="my-4">
            {activeButton === "description" && (
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                numquam enim! Aperiam nisi minus omnis aliquam eius quis culpa
                est earum suscipit dignissimos! Saepe dicta molestias esse,
                aspernatur nobis tenetur!
              </p>
            )}
            {activeButton === "order period" && (
              <p className="text-gray-500">
                *Sales will end when product is sold out.
              </p>
            )}
            {activeButton === "specifications" && (
              <div>
                <div className="flex justify-between py-1  px-1 dark:">
                  <h1 className=" dark:text-white text-gray-500">
                    Release Date
                  </h1>
                  <p className=" dark:text-white text-gray-500">
                    {selectedProductData.releaseDate}
                  </p>
                </div>
                <div className="flex justify-between py-1 px-1">
                  <h1 className=" dark:text-white text-gray-500">
                    Announce Date
                  </h1>
                  <p className=" dark:text-white text-gray-500">
                    {selectedProductData.announceDate}
                  </p>
                </div>
                <div className="flex justify-between py-1  px-1 dark:">
                  <h1 className=" dark:text-white text-gray-500">
                    Manufacturer
                  </h1>
                  <p className=" dark:text-white text-gray-500">
                    {selectedProductData.manufacturer}
                  </p>
                </div>
                <div className="flex justify-between py-1 px-1">
                  <h1 className=" dark:text-white text-gray-500">Series</h1>
                  <p className=" dark:text-white text-gray-500">
                    {selectedProductData.series}
                  </p>
                </div>
                <div className="flex flex-col py-1  px-1 dark:">
                  <h1 className=" dark:text-white text-gray-500">
                    Specifications:
                  </h1>
                  <p className=" dark:text-white text-gray-500">
                    {selectedProductData.specifications}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
