import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen
        ? "right-0"
        : "-right-full"} fixed top-0 h-full w-full md:w-[35vw] xl:max-w-[30vw] bg-white shadow-2xl transition-all duration-300 z-20 px-6 py-4 lg:px-8`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <h2 className="uppercase text-lg font-semibold">
          Shopping Cart ({itemAmount})
        </h2>

        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="cursor-pointer w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <IoMdArrowForward className="text-2xl text-gray-600" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto mt-4 space-y-4">
        {cart.length > 0
          ? cart.map(item => <CartItem item={item} key={item.id} />)
          : <p className="text-center text-gray-500">Your cart is empty.</p>}
      </div>

      {/* Total and Buttons Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold text-primary">
            R{parseFloat(total).toFixed(2)}
          </span>
        </div>

        {/* Clear Cart Button */}
        <button
          onClick={clearCart}
          className="mt-6 w-full py-3 bg-red-600 text-white flex items-center justify-center rounded-full hover:bg-red-700 transition"
        >
          <FiTrash2 className="text-xl mr-2" />
          Clear Cart
        </button>

        {/* Pay Now Button */}
        <button
          onClick={() => alert("Proceeding to Payment...")}
          className="mt-4 w-full py-3 bg-green-600 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
