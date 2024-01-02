import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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

const App = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ProductContextProvider>
      <ThemeContextProvider>
        <div className="font-poppins dark:bg-custom1">
          <Routes>
            <Route path="/" element={user ? <Homepage /> : <LoginPage />} />
            <Route
              path="/product/:id"
              element={user ? <SelectedProductPage /> : <LoginPage />}
            />
            <Route path="/cart" element={user ? <CartPage /> : <LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/about"
              element={user ? <AboutPage /> : <LoginPage />}
            />
            <Route
              path="/contact"
              element={user ? <ContactPage /> : <LoginPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </ProductContextProvider>
  );
};

export default App;
