/** @format */

import { createContext, useState } from "react";
import { productData } from "../productData";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(productData);
  const [selectedProductData, setSelectedProductData] = useState(null);

  const [cart, setCart] = useState([])

  console.log(cart)

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, { ...product }]); 
      alert('Item has been added.');
    } else {
      alert('Item already in cart.');
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
    removeToCart
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

export { ProductContext, ProductContextProvider };
