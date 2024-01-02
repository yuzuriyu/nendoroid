/** @format */

import { createContext, useState } from "react";
import { productData } from "../productData";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(productData);
  const [selectedProductData, setSelectedProductData] = useState(null);

  const [cart, setCart] = useState([]);

  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  const add = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const subtract = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] > 0 ? prevQuantities[itemId] - 1 : 0,
    }));
  };

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, { ...product }]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 1, // Set the initial quantity to 1 for the new item
      }));
      alert("Item has been added.");
    } else {
      alert("Item already in cart.");
    }
  };

  const removeToCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const value = {
    allProducts,
    selectedProductData,
    setSelectedProductData,
    cart,
    addToCart,
    removeToCart,
    quantities,
    total,
    add,
    subtract,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

export { ProductContext, ProductContextProvider };
