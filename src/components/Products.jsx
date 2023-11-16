/** @format */

import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import search from "../assets/search.png";
import SelectedProduct from "./SelectedProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const { allProducts, selectedProductData, setSelectedProductData } =
    useContext(ProductContext);
  const productsPerPage = 16;
  const [searchInput, setSearchInput] = useState("");

  const handleSelectProduct = (product) => {
    setSelectedProductData(product);
  };

  console.log(selectedProductData);

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  // State to manage the selected filter option
  const [selectedFilter, setSelectedFilter] = useState("All Products");

  // Calculate the index range for the current page based on filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Apply filtering based on the selected option
  const filteredProducts = allProducts.filter((product) => {
    switch (selectedFilter) {
      case "Purchase Bonus":
        return product.productType.includes("Bonus Included");
      case "Online Exclusive":
        return product.productType.includes("Online Exclusive");
      case "Availabe Now":
        return product.available === true;
      case "Cannot be Combined":
        return product.productType.includes("Cannot be Combined");
      case "Rerelease":
        return product.productType.includes("Rerelease");
      case "Limited Quantity":
        return product.productType.includes("Limited Quantity");
      default:
        return true; // Default to showing all products
    }
  });

  // Update the index range when the current page changes
  const currentProducts = filteredProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    // Reset the current page when the filter changes
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset the current page when the search input changes
  };

  return (
    <>
      <div className="mt-20 w-11/12 m-auto md:w-10/12">
        <div className="flex mb-5 w-2/3 md:w-1/3 rounded-lg overflow-hidden">
          <input
            type="text"
            className="flex-1 border-2 placeholder:pl-2 rounded-lg rounded-r-none focus:outline-none pl-2"
            placeholder="Search"
            onChange={(event) => handleSearchChange(event)}
            value={searchInput}
          />
          <div className="bg-orange-400 px-2 py-2">
            <img src={search} alt="search" className="w-5" />
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto md:w-10/12 my-20">
        <div className="flex w-full items-center justify-between mb-2">
          <div className="flex items-center">
            {currentPage > 1 && (
              <img
                src={arrowLeft}
                alt="arrow left"
                className="w-5 cursor-pointer"
                onClick={prevPage}
              />
            )}
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-3 py-1 rounded-full ${
                    i + 1 === currentPage
                      ? "bg-orange-400 text-white"
                      : "text-black dark:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
            {currentPage <
              Math.ceil(filteredProducts.length / productsPerPage) && (
              <img
                src={arrowRight}
                alt="arrow right"
                className="w-5 cursor-pointer"
                onClick={nextPage}
              />
            )}
          </div>
          <div className="flex items-center">
            <p className="mr-2 hidden md:block dark:text-white">Sort by:</p>
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="border rounded-md p-1"
            >
              <option value="All Products">All Products</option>
              <option value="Purchase Bonus">Purchase Bonus</option>
              <option value="Online Exclusive">Online Exclusive</option>
              <option value="Availabe Now">Availabe Now</option>
              <option value="Cannot be Combined">Cannot be Combined</option>
              <option value="Rerelease">Rerelease</option>
              <option value="Limited Quantity">Limited Quantity</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white shadow-lg p-3 dark:bg-custom2"
              onClick={() => handleSelectProduct(product)}
            >
              <div>
                <img src={product.image} alt="product" />
              </div>
              <div className="pt-2">
                <h1 className="dark:text-white">{product.name}</h1>
              </div>
              <div className="mt-5 mb-2">
                <div className="flex flex-col md:flex-row gap-2 mb-2">
                  <div className="flex items-center">
                    <p className="bg-gray-400 px-2 rounded-lg text-white text-sm font-bold">
                      {product.available === false ? "Not Available" : null}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="bg-pink-300 px-2 font-bold text-pink-700 rounded-lg text-sm">
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
                <div className="flex mb-2">
                  <p className="bg-blue-300 px-2 rounded-lg font-bold text-sm text-blue-700">
                    {product.productType.includes("Cannot be Combined")
                      ? "Cannot be Combined"
                      : null}
                  </p>
                </div>
                <div className="flex mb-2">
                  <p className="bg-green-300 px-2 rounded-lg font-bold text-sm text-green-700">
                    {product.productType.includes("Limited Quantity")
                      ? "Limited Quantity"
                      : null}
                  </p>
                </div>
                <div className="flex">
                  <p className="bg-purple-300 px-2 rounded-lg font-bold text-sm text-purple-700">
                    {product.productType.includes("Online Exclusive")
                      ? "Online Exclusive"
                      : null}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <p className="text-gray-400">¥{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex mt-4 items-center">
          {currentPage > 1 && (
            <img
              src={arrowLeft}
              alt="arrow left"
              className="w-5 cursor-pointer"
              onClick={prevPage}
            />
          )}
          {Array.from(
            { length: Math.ceil(filteredProducts.length / productsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded-full ${
                  i + 1 === currentPage
                    ? "bg-orange-400 text-white"
                    : "text-black dark:text-white"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
          {currentPage <
            Math.ceil(filteredProducts.length / productsPerPage) && (
            <img
              src={arrowRight}
              alt="arrow right"
              className="w-5 cursor-pointer"
              onClick={nextPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
