import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setAmount] = useState(0); // count
  const [total, setTotal] = useState(0); // total price

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

  const clearCart = () => {
    setCart([]);
  };

  //increase item quantity
  const increase = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  //decrease item quantity
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
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  //Set Cart total
  useEffect(() => {
    const total = cart.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  }, [cart]);

  //set cart itemAmount/count
  useEffect(() => {
    if (cart) {
      const itemAmount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setAmount(itemAmount);
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
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
