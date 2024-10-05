import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  IoMdCloseCircle,
  IoMdRemoveCircle,
  IoMdAddCircle
} from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-4 border-b border-gray-300 w-full font-light text-gray-500">
      {/* Container for image and details */}
      <div className="w-full flex items-center gap-x-4">
        {/* Product image */}
        <Link to={`/product/${id}`} className="min-w-[80px]">
          <img className="max-w-[80px]" src={image} alt="item" />
        </Link>

        {/* Product title, quantity, and price */}
        <div className="w-full flex flex-col">
          {/* Product title */}
          <div className="flex justify-between items-center mb-2">
            <Link
              className="text-sm font-medium text-primary max-w-[240px] hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
          </div>

          {/* Quantity controls and price */}
          <div className="flex gap-x-4 items-center text-sm">
            {/* Quantity controls */}
            <div className="flex items-center border border-gray-300 rounded">
              <IoMdRemoveCircle
                onClick={() => decrease(id)}
                className="text-xl text-primary cursor-pointer"
              />
              <span className="px-4">
                {amount}
              </span>
              <IoMdAddCircle
                onClick={() => increase(id)}
                className="text-xl text-primary cursor-pointer"
              />
            </div>

            {/* Price */}
            <div className="ml-auto font-medium text-primary">
              {`R ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>

      {/* Cart icon in the top-right corner */}
      <div className="fixed top-4 right-4">
        <IoMdCloseCircle
          onClick={() => removeFromCart(id)}
          className="text-3xl text-gray-600 cursor-pointer hover:text-red-500 transition"
        />
      </div>
    </div>
  );
};

export default CartItem;
