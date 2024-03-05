import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { total} = useContext(CartContext);
  return (
    
      <header className="bg-gray-200
       " >
       
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className=" py-1  cursor-pointer flex relative max-w-[5000px]"
      >
        <BsCart className="text-2xl  " />

      </div>
      </header>
    
  );
};

export default Header;
