/** @format */

import React from "react";
import Homepage from "./pages/HomePage";
import ProductContextProvider from "./context/ProductContext";
import ThemeContextProvider from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import SelectedProductPage from "./pages/SelectedProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <ProductContextProvider>
      <ThemeContextProvider>
        <div className="font-poppins dark:bg-custom1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<SelectedProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </ProductContextProvider>
  );
};

export default App;
