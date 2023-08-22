import React, { useContext } from "react";
import CartContext from "../store/cart-context";
const CartButton=(props)=>{
    const ctx=useContext(CartContext);
    let quantity=0;
    ctx.items.forEach((item)=>{
        quantity=quantity+Number(item.quantity);
    })
    return (
        <button onClick={props.onShowCart}>
            <span>Your Cart :</span>
            <span>{quantity}</span>
        </button>
    )
}
export default CartButton;