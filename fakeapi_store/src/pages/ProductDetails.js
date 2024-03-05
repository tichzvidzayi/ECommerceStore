import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center "></section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">

<div className="flex flex-col lg:flex-row items-center">

   <div className="flex flex-1 justify-center items-center mb-8  ">
    <img className = 'max-w-[200px] lg:max-w-sm' src ={image} alt='item' />
   </div>
</div>
 <div className="flex-1 text-center ">
 <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto "> {title}</h1>
      </div>
      <div className="text-xl text-red-600 font-medium mb-6"> R {price}</div>
      <p>{description}</p>

      <button onClick = { ()=> addToCart(product, product.id)}className="bg-primary py-4 px-8 text-white"> Add to Cart </button>
      </div>
    </section>
  );
};

export default ProductDetails;
