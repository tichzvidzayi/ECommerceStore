import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <header
      className="bg-gray-100 py-4 shadow-md fixed w-full z-10 transition-all
       "
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="  cursor-pointer flex relative"
      >
        <h1>Cart</h1>
        <BsCart className="text-2xl" />
        <div className="bg-red-500 absolute left-12 px-3 py-3  -bottom-5 text-[13px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
         {/* Count cart Items */}   {itemAmount}
        </div>
      </div>
    </header>
  );
};

export default Header;
