/** @format */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductContextProvider from "./context/productContext";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <ProductContextProvider>
      <ThemeContextProvider>
        <div className="font-poppins dark:bg-custom1">
          <Header />
          <Hero />
          <Products />
          <Footer />
        </div>
      </ThemeContextProvider>
    </ProductContextProvider>
  );
};

export default App;
