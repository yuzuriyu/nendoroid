/** @format */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductContextProvider from "./context/productContext";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ProductContextProvider>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </ProductContextProvider>
  );
};

export default App;
