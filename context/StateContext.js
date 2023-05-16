import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;

  function toggleCartItemQty(id, value) {
    foundProduct = cartItems.find((item) => item._id === id);

    // const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      const updatedItemsArray = cartItems.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      setCartItems(updatedItemsArray);

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQty((prevTotalQty) => prevTotalQty + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        const updatedItemsArray = cartItems.map((item) => {
          if (item._id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });

        setCartItems(updatedItemsArray);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQty((prevTotalQty) => prevTotalQty - 1);
      }
    }
  }

  function increaseQty() {
    setQty((prevQty) => prevQty + 1);
  }

  function decreaseQty() {
    setQty((prevQty) => {
      if (prevQty < 2) return 1;
      return prevQty - 1;
    });
  }

  function onRemove(product) {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevPrice) => prevPrice - foundProduct.price * foundProduct.quantity);
    setTotalQty((prevTotalQty) => prevTotalQty - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  function onAdd(product, quantity) {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} successfully added to the cart`);
  }

  function resetQtyOnProductChange() {
    setQty(1);
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQty,
        setTotalQty,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        onRemove,
        setShowCart,
        toggleCartItemQty,
        resetQtyOnProductChange,
        setQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
