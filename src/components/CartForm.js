import React, { useState, useContext } from "react";
import CartContext from "../store/cart-context";


const CartForm = (props) => {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(CartContext);
  

  const quantityChangeHandler = (event) => {
    setQuantity(+event.target.value); // Convert the input value to a number using +
  };

  const addItemToCart = async(event) => {
    event.preventDefault();
    ctx.addItem({ ...props.item, quantity: quantity });
    try{
      const response=await fetch('https://react-test3-product-default-rtdb.firebaseio.com/cartItems.json',{
          method:'POST',
          body:JSON.stringify(props.item),
          headers:{
              'Content-Type':'application/json'
          }
      })
      if(!response.ok){
          throw new Error('failed to add product');
      }
      const data=await response.json()
      console.log(data);
  }catch(error){
      console.error('failed to add product');
  }
  };

  return (
    <div>
      <input type="number" value={quantity} onChange={quantityChangeHandler} id="amount" />
      <button onClick={addItemToCart}>+ Add</button>
    </div>
  );
};

export default CartForm;