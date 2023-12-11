/** @format */

import React from "react";
import Homepage from "./pages/HomePage";
import ProductContextProvider from "./context/ProductContext";
import ThemeContextProvider from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import SelectedProductPage from "./pages/SelectedProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Register from "./components/Register";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <ProductContextProvider>
      <ThemeContextProvider>
        <div className="font-poppins dark:bg-custom1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<SelectedProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </ProductContextProvider>
  );
};

export default App;
