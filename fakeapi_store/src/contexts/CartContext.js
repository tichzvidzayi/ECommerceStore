import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      //item already exists
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //console.log(cart);

  const clearCart = () => {
    setCart([]);
  };

  const increase = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

useEffect(()=>{
 const total = cart.reduce ((acc , currentItem)=>{

  return acc + (currentItem.price *currentItem.amount);
 }, 0);

setTotal(total);
})

  useEffect(() => {
    if (cart) {
      const itemAmount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);

      setTotal(itemAmount);
    }
  }, [cart]);




  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increase,
        decrease,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
