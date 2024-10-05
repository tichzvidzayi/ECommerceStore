import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-gray-200 py-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Title */}
        <h1 className="text-xl font-semibold text-gray-800">ECommerce Store</h1>

        {/* Cart Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer flex items-center"
        >
          {/* Cart Icon */}
          <BsCart className="text-2xl text-gray-800" />

          {/* Item Count */}
          {itemAmount > 0 &&
            <div className="bg-red-500 absolute -top-2 -right-3 text-xs w-5 h-5 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
