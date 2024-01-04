import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProductContextProvider from "./context/ProductContext";
import ThemeContextProvider from "./context/ThemeContext";
import SelectedProductPage from "./pages/SelectedProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Register from "./components/Register";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import { auth } from "./config/firebase";
import CountryContextProvider from "./context/CountryContext";
import CheckoutPage from "./pages/CheckoutPage";
import BlogPage from "./pages/BlogPage";
import BlogContextProvider from "./context/BlogContext";

const App = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const renderProtectedRoute = (element) => (user ? element : <LoginPage />);

  return (
    <BlogContextProvider>
      <CountryContextProvider>
        <ProductContextProvider>
          <ThemeContextProvider>
            <div className="font-poppins dark:bg-custom1">
              <Routes>
                <Route path="/" element={renderProtectedRoute(<Homepage />)} />
                <Route
                  path="/product/:id"
                  element={renderProtectedRoute(<SelectedProductPage />)}
                />
                <Route
                  path="/cart"
                  element={renderProtectedRoute(<CartPage />)}
                />
                <Route
                  path="/checkout"
                  element={renderProtectedRoute(<CheckoutPage />)}
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/about"
                  element={renderProtectedRoute(<AboutPage />)}
                />
                <Route
                  path="/contact"
                  element={renderProtectedRoute(<ContactPage />)}
                />
                <Route
                  path="/blog"
                  element={renderProtectedRoute(<BlogPage />)}
                />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </ThemeContextProvider>
        </ProductContextProvider>
      </CountryContextProvider>
    </BlogContextProvider>
  );
};

export default App;
