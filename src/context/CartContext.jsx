import React, { createContext, useState, useContext } from 'react';
import { ProductContext } from './ProductContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { products } = useContext(ProductContext); 
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
