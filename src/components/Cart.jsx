import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import cancel from "../assets/cancel.png";
import heart from "../assets/heart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, allProducts, removeToCart, quantities, add, subtract } =
    useContext(ProductContext);
  const [subtotal, setSubtotal] = useState({});
  const [total, setTotal] = useState(0);

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
    <div className="pt-32 pb-12 md:pb-32 w-11/12 m-auto md:w-10/12">
      {cart.length !== 0 && (
        <h1 className="text-2xl mb-4 font-bold dark:text-white">
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
                  <p className="mx-2 dark:text-white">{quantities[item.id]}</p>
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
              <Link to={"/"} className="bg-orange-400 text-white py-3 px-5">
                Find something!
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="w-full m-auto">
        <h1 className="dark:text-white py-4 font-bold mt-10">You might like</h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mb-10">
          {youMightLike.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="shadow-lg p-2 dark:bg-custom2"
            >
              <div className="relative">
                <img src={product.image} alt="product" />
                <img
                  src={heart}
                  alt="heart"
                  className="absolute top-2 right-2 w-7 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-gray-500 text-sm pb-3 dark:text-white pt-2">
                {product.name}
              </p>
              <h1 className="dark:text-white">¥{product.price}</h1>
            </Link>
          ))}
        </div>
      </div>
      {cart.length !== 0 && (
        <div className="flex py-4 md:w-1/2">
          <div className="mr-4 w-1/4">
            <p className="text-gray-500 text-sm">Total</p>
            <h1 className="text-xl text-orange-400 font-bold">¥{total}</h1>
          </div>
          <button className="bg-black flex-1 text-white rounded-lg md:w-2/3 dark:bg-orange-400">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
