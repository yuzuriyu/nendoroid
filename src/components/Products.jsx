/** @format */

import { ProductContext } from "../context/productContext";
import { useState, useEffect, useContext } from "react";

const Products = () => {
  const { allProducts } = useContext(ProductContext);
  return (
    <div className="w-11/12 m-auto grid grid-cols-2 gap-5 mt-20 md:grid-cols-3 lg:grid-cols-4 md:w-10/12">
      {allProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-lg p-3">
          <div>
            <img src={product.image} alt="product" />
          </div>
          <div>
            <h1>{product.name}</h1>
          </div>
          <div className="mt-5 mb-2">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center">
                <p className="bg-gray-400 px-2 rounded-lg text-white text-sm font-bold">
                  {product.available === false ? "Not Available" : null}
                </p>
              </div>
              <div className="flex items-center">
                <p className="bg-blue-300 px-2 font-bold text-blue-700 rounded-lg text-sm">
                  {product.productType.includes("Rerelease")
                    ? "Rerelease"
                    : null}
                </p>
              </div>
            </div>
            <div className="mb-2 flex">
              <p className="bg-yellow-400 px-2 rounded-lg font-bold text-yellow-700 text-sm">
                {product.productType.includes("Bonus Included")
                  ? "Bonus Included"
                  : null}{" "}
              </p>
            </div>
            <div className="flex">
              <p className="bg-blue-200 px-2 rounded-lg font-bold text-sm text-blue-700">
                {product.productType.includes("Cannot be Combined")
                  ? "Cannot be Combined"
                  : null}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-gray-400">¥{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
