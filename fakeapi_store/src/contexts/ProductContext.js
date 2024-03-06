import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);

        if (!response.ok) {
          // If the response status is not OK (e.g., 404 Not Found), throw an error
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message || "An error occurred");
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
