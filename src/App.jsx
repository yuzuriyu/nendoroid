/** @format */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductContextProvider from "./context/productContext";
import Products from "./components/Products";

const App = () => {
  return (
    <ProductContextProvider>
      <Header />
      <Hero />
      <Products />
    </ProductContextProvider>
  );
};

export default App;
