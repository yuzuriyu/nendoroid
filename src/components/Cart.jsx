import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import cancel from "../assets/cancel.png";
import heart from "../assets/heart.png";
import banner from "../assets/cart--banner.jpg";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Cart = () => {
  const {
    cart,
    allProducts,
    removeToCart,
    quantities,
    add,
    subtract,
    total,
    setTotal,
  } = useContext(ProductContext);
  const [subtotal, setSubtotal] = useState({});

  const [youMightLike, setYouMightLike] = useState([]);

  useEffect(() => {
    let calculatedSubtotal = 0;
    for (const item of cart) {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = quantities[item.id] || 0;

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        calculatedSubtotal += itemPrice * itemQuantity;
      }
    }
    let formattedSubtotal = calculatedSubtotal.toFixed(2);
    setSubtotal(formattedSubtotal);

    setTotal(calculatedSubtotal);
  }, [cart, quantities]);

  useEffect(() => {
    // Get four random products from allProducts
    const getRandomProducts = () => {
      const randomProducts = [];
      const productCount = allProducts.length;

      while (randomProducts.length < 4) {
        const randomIndex = Math.floor(Math.random() * productCount);
        const randomProduct = allProducts[randomIndex];

        // Ensure the product is not already in the list
        if (
          !randomProducts.some((product) => product.id === randomProduct.id)
        ) {
          randomProducts.push(randomProduct);
        }
      }

      setYouMightLike(randomProducts);
    };

    getRandomProducts();
  }, [allProducts]);
  return (
    <>
      <div className="w-full h-[316px] relative">
        <img
          src="https://i.imgur.com/Wo9a4SJ.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center">
          <h1 className="text-5xl text-white font-playfair">Cart</h1>
        </div>
      </div>
      <div className="pt-20 pb-12 md:pb-32 w-11/12 m-auto md:w-10/12">
        {cart.length !== 0 && (
          <h1 className="text-lg mb-4 font-bold dark:text-white">
            My Shopping Bag
          </h1>
        )}
        <div className="w-full md:w-1/2">
          {cart.map((item) => (
            <div className="flex border-b-2 py-2 items-center">
              <div className="mr-2">
                <img src={item.image} alt="product" className="w-24" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2 justify-between">
                  <p className="dark:text-white">{item.name}</p>
                  <img
                    src={cancel}
                    alt="cancel"
                    onClick={() => removeToCart(item.id)}
                  />
                </div>
                <p className="text-gray-500 dark:text-white">
                  Qty: {quantities[item.id]}{" "}
                </p>
                <div className="flex justify-between py-3">
                  <div className="flex items-center">
                    <img
                      src={minus}
                      alt="minus"
                      onClick={() => subtract(item.id)}
                      className="cursor-pointer hover:scale-110 transition-transform ease-in-out"
                    />
                    <p className="mx-2 dark:text-white">
                      {quantities[item.id]}
                    </p>
                    <img
                      src={plus}
                      alt="plus"
                      onClick={() => add(item.id)}
                      className="cursor-pointer hover:scale-110 transition-transform ease-in-out"
                    />
                  </div>
                  <p className="text-orange-400">¥{item.price}</p>
                </div>
              </div>
            </div>
          ))}
          {cart.length === 0 && (
            <div className="m-auto flex items-center mt-7">
              <div>
                <p className="mb-6 dark:text-white">
                  Your shopping cart is currently empty.
                </p>
              </div>
            </div>
          )}
        </div>

        {cart.length !== 0 && (
          <div className="flex py-4 md:w-1/2">
            <div className="mr-4 w-1/4">
              <p className="text-gray-500 text-sm dark:text-white">Total</p>
              <h1 className="text-xl text-orange-400 font-bold">¥{total}</h1>
            </div>
            <Link to={"/checkout"} className="flex flex-1">
              <button className="bg-black flex-1 text-white rounded-lg md:w-2/3 dark:bg-orange-400">
                Proceed to checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
