import React, { createContext, useState, useCallback, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Memoized function to fetch products
  const fetchProducts = useCallback(async () => {
    try {
      // Check if products are cached in localStorage
      const cachedProducts = localStorage.getItem("products");

      if (cachedProducts) {
        // If cached products exist, use them
        setProducts(JSON.parse(cachedProducts));
        return;
      }

      // Fetch products from the API if not cached
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Cache the fetched products in localStorage
      localStorage.setItem("products", JSON.stringify(data));
      setProducts(data);
    } catch (error) {
      console.log(error.message || "An error occurred");
    }
  }, []);

  // Fetch products only once (or on cache invalidation)
  useEffect(
    () => {
      fetchProducts();
    },
    [fetchProducts]
  );

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
