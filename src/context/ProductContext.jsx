/** @format */

import { createContext, useState } from "react";
import { productData } from "../productData";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(productData);
  const [selectedProductData, setSelectedProductData] = useState(null);

  const value = {
    allProducts,
    selectedProductData,
    setSelectedProductData,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

export { ProductContext, ProductContextProvider };
