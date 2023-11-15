/** @format */

import { createContext, useState, useEffect, Children } from "react";
import { productData } from "../productData";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(productData);
  console.log(allProducts);

  const value = {
    allProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

export { ProductContext, ProductContextProvider };
