/** @format */

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import wishlist from '../assets/Wishlist.png';
import heart from '../assets/heart.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import { Link, useParams } from 'react-router-dom';


const SelectedProduct = () => {
  const { selectedProductData, allProducts, addToCart, setSelectedProductData, quantities, add, subtract } = useContext(ProductContext);
  const [similarProducts, setSimilarProducts] = useState([])
  const [activeButton, setActiveButton] = useState("description");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const product = allProducts.find(product => product.id === parseInt(id, 10));
    if (product) {
      setSelectedProductData(product);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [id, allProducts, setSelectedProductData]);

  useEffect(() => {
    if (selectedProductData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [selectedProductData]);

  useEffect(() => {
    const getRandomProducts = () => {
      const randomProducts = [];
      const productCount = allProducts.length;

      while (randomProducts.length < 4) {
        const randomIndex = Math.floor(Math.random() * productCount);
        const randomProduct = allProducts[randomIndex];

        if (!randomProducts.some(product => product.id === randomProduct.id)) {
          randomProducts.push(randomProduct);
        }
      }

      setSimilarProducts(randomProducts);
    };

    getRandomProducts();
  }, [allProducts, id]);

  const handleActiveButton = (selected) => {
    setActiveButton(selected);
  };

  if (loading || !selectedProductData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-11/12 m-auto pt-12 md:pt-32 md:pb-24 md:w-10/12">
      <div className="flex flex-col md:flex-row pt-10 items-center">
        <div className="w-full flex justify-center py-10 md:w-1/2">
          <img
            src={selectedProductData.image}
            alt="product"
            className="w-[250px] dark:bg-custom2 p-2"
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
              <img src={minus} alt="minus" className="cursor-pointer hover:scale-110 transition-transform ease-in-out" onClick={() => subtract(selectedProductData.id)}/>
              <p className="mx-2.5 text-xs dark:text-white">{quantities[selectedProductData.id] || 0}</p>
              <img src={plus} alt="plus" className="cursor-pointer hover:scale-110 transition-transform ease-in-out" onClick={() => add(selectedProductData.id)}/>
            </div>
          </di>
          <div className="flex justify-between mt-4">
            <p
              className={`text-gray-500 dark:text-white p-2 rounded-lg cursor-pointer ${activeButton === "description" ? "bg-orange-100 text-orange-700 dark:bg-custom2 dark:text-white" : ""}`}
              onClick={() => handleActiveButton("description")}
            >
              Description
            </p>
            <p
              className={`text-gray-500 dark:text-white p-2 rounded-lg cursor-pointer ${activeButton === "order period" ? "bg-orange-100 text-orange-700 dark:bg-custom2 dark:text-white" : ""}`}
              onClick={() => handleActiveButton("order period")}
            >
              Order Period
            </p>
            <p
               className={`text-gray-500 dark:text-white p-2 rounded-lg cursor-pointer ${activeButton === "specifications" ? "bg-orange-100 text-orange-700 dark:bg-custom2 dark:text-white" : ""}`}
              onClick={() => handleActiveButton("specifications")}
            >
              Specifications
            </p>
          </div>
          <div className="my-4 border-b-2 pb-8">
            {activeButton === "description" && (
              <p className="text-gray-500 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                numquam enim! Aperiam nisi minus omnis aliquam eius quis culpa
                est earum suscipit dignissimos! Saepe dicta molestias esse,
                aspernatur nobis tenetur!
              </p>
            )}
            {activeButton === "order period" && (
              <p className="text-gray-500 dark:text-white">
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
          <div className="hidden md:block">
            <div className="flex items-center w-full">
              <img src={wishlist} alt="wishlist" className="mr-4"/>
              <button className="bg-black dark:bg-orange-400 text-white lg:w-2/3 md:flex-1 lg:flex-none py-2 rounded-md hover:opacity-80" onClick={() => addToCart(selectedProductData)}>Add to Cart</button>
            </div>
        </div>
        </div>
      </div>
      <div className="w-full m-auto">
          <h1 className="dark:text-white py-4 font-bold">Similar Products</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mb-10">
              {similarProducts.map((product => <Link to={`/product/${product.id}`} key={product.id} className="shadow-lg p-2 dark:bg-custom2">
                <div className="relative">
                  <img src={product.image} alt="product" />
                  <img src={heart} alt="heart" className="absolute top-2 right-2 w-7 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>

                </div>
                <p className="text-gray-500 text-sm pb-3 dark:text-white pt-2">{product.name}</p>
                <h1 className="dark:text-white">¥{product.price}</h1>
              </Link>))}
          </div>
        </div>
        <div className="flex items-center py-5 border-t-2 md:hidden">
          <div className="flex items-center w-full justify-center">
            <img src={wishlist} alt="wishlist" className="mr-4"/>
            <button className="bg-black text-white flex-1 py-2 rounded-md md:w-1/2 md:flex-none hover:opacity-80 dark:bg-orange-400" onClick={() => addToCart(selectedProductData)}>Add to Cart</button>
          </div>
        </div>
    </div>
  );
};

export default SelectedProduct;
