import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  IoMdCloseCircle,
  IoMdRemoveCircle,
  IoMdAddCircle,
} from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-300 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image and description */}

        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} alt="item" />
        </Link>

        <div className=" w-full flex flex-col">
          {/*Add title  */}
          <div className="flex justify-between mb-2">
            <Link
              className=" text-sm  font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>

            {/*Add  icon */}

            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdCloseCircle className=" text-gray-600 gap-3 hover:text-red-500 transition " />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/*Add  quantity*/}

            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium ">
              <div onClick={() => decrease(id)} className="flex-1">
                <IoMdRemoveCircle />
              </div>

              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increase(id)}
                className="flex-1  h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAddCircle />
              </div>
            </div>
            <div className="flex-1 flex  justify-end items-center text-primary font-medium">
                {/* Display Price in Rands/ZAR */}
              {`R ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
