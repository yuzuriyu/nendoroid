import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import cancel from '../assets/cancel.png';
import heart from '../assets/heart.png';
import { Link, useParams } from 'react-router-dom';

const Cart = () => {
    const { cart, allProducts, removeToCart } = useContext(ProductContext)

    const [youMightLike, setYouMightLike] = useState([]);

    useEffect(() => {
        // Get four random products from allProducts
        const getRandomProducts = () => {
            const randomProducts = [];
            const productCount = allProducts.length;

            while (randomProducts.length < 4) {
                const randomIndex = Math.floor(Math.random() * productCount);
                const randomProduct = allProducts[randomIndex];

                // Ensure the product is not already in the list
                if (!randomProducts.some(product => product.id === randomProduct.id)) {
                    randomProducts.push(randomProduct);
                }
            }

            setYouMightLike(randomProducts);
        };

        getRandomProducts();
    }, [allProducts]);
    return (
        <div className="my-32 w-11/12 m-auto md:w-10/12">
            <h1 className="text-2xl mb-4 font-bold">My Shopping Bag</h1>
            <div className="w-full md:w-1/2">
                {cart.map((item => <div className="flex border-b-2 py-2 items-center">
                    <div className="mr-2">
                        <img src={item.image} alt="product" className="w-24"/>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center mb-2 justify-between">
                            <p>{item.name}</p>
                            <img src={cancel} alt="cancel" onClick={() => removeToCart(item.id)}/>
                        </div>
                        <p className="text-gray-500">Qty: </p>
                        <div className="flex justify-between py-3">
                            <div className="flex items-center">
                                <img src={minus} alt="minus" />
                                <p className="mx-2">1</p>
                                <img src={plus} alt="plus" />
                            </div>
                            <p className="text-orange-400">¥{item.price}</p>
                        </div>
                    </div>
                </div>))}
            </div>
            <div className="w-full m-auto">
          <h1 className="dark:text-white py-4 font-bold mt-10">You might like</h1>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mb-10">
              {youMightLike.map((product => <Link to={`/product/${product.id}`} className="shadow-lg p-2 dark:bg-custom2">
                <div className="relative">
                  <img src={product.image} alt="product" />
                  <img src={heart} alt="heart" className="absolute top-2 right-2 w-7 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
                </div>
                <p className="text-gray-500 text-sm pb-3 dark:text-white pt-2">{product.name}</p>
                <h1 className="dark:text-white">¥{product.price}</h1>
              </Link>))}
          </div>
        </div>
        </div>
    )
}

export default Cart;