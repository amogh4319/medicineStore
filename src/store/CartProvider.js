import React,{useState} from "react";
import CartContext from "./cart-context";
const CartProvider=(props)=>{
  const [items,updatedItems]=useState([]);
    const addItemToCartHandler = (item) => {
      const existingItemIndex = items.findIndex((existingItem) => existingItem.id === item.id);
      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        const updatedItem = {
          ...items[existingItemIndex],
          quantity: items[existingItemIndex].quantity + item.quantity,
        };
        const updatedItemsArray = [...items];
        updatedItemsArray[existingItemIndex] = updatedItem;
        updatedItems(updatedItemsArray);
      } else {
        // Item doesn't exist in the cart, add it as a new entry
        updatedItems((prevItems) => [...prevItems, item]);
      }
      };
    
      const removeItemFromCartHandler = (id) => {
        const existingItemIndex = items.findIndex((existingItem) => existingItem.id === id);
    if (existingItemIndex !== -1) {
      const existingItem = items[existingItemIndex];
      if (existingItem.quantity === 1) {
        // If the item's quantity is 1, remove the item from the cart
        const updatedItemsArray = items.filter((item) => item.id !== id);
        updatedItems(updatedItemsArray);
      } else {
        // If the item's quantity is greater than 1, decrease its quantity by 1
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        const updatedItemsArray = [...items];
        updatedItemsArray[existingItemIndex] = updatedItem;
        updatedItems(updatedItemsArray);
      }
    }
      };
    
      const cartContext = {
        items: items,
        
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        
      };
    
      return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
    };
    
    export default CartProvider;