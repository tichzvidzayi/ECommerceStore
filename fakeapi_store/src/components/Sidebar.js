import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

 const {cart, clearCart, total} =( useContext(CartContext));
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed  top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center  justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ( 0)
        </div>

        {/* icons */}

        <div
          onClick={handleClose}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div>
            {cart.map(item=>{

              return <CartItem item={item} key ={item.id}/>
            })}
      </div>


      <div className="bg-pink-100 flex flex-col gap-y-3 py-4 mt-4"> 
    <div className="flex w-full justify-between items-center">

    </div >
    <div className="font-semibold ">
      <span className="mr-2"> Total: </span> R {parseFloat(total).toFixed(2)}
      </div>
      </div>

      <div onClick={clearCart} className="cursor-pointer py-4 bg-red-300 text-white w-12 h-12 flex justify-center items-center text-xl"><FiTrash2/></div>
    </div>
  );
};

export default Sidebar;
