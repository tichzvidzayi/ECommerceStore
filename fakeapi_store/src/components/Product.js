import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";



const Product = ({ product }) => {
  // console.log(product);

  const {addToCart}= useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/*pic*/}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="Product"
            />
          </div>
        </div>
        
        {/* buttons*/}

        <div className="absolute  bottom-0 right-14  group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={()=> addToCart(product,id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-gray-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl "
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        {/* category */}

        <div className="text-sm capitalize text-gray-500 mb-1">
          <div>{category}</div>

          <Link to={`/product/${id}`}>
            <h2 className=" font-semibold  ">{title}</h2>
          </Link>
          <h2 className=" font-semibold">R {price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;