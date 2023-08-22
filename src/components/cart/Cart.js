import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from './CartItem';
import Modal from "../Modal";
const Cart=(props)=>{
    const ctx=useContext(CartContext);
    let totalAmount=0;
    ctx.items.forEach((item)=>{
        totalAmount=totalAmount+Number(item.price*item.quantity);
    })
    const hasItems=ctx.items.length>0;
    const cartItemAddHandler=(item)=>{
        ctx.addItem({...item,quantity:1})
    }
    const cartItemRemoveHandler=id=>{
        ctx.removeItem(id);
    }
    const cartItems=(
        <ul>
            {ctx.items.map((item)=>(
                <CartItem 
                key={item.id}
                name={item.name}
                amount={item.quantity}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}
                />
            ))}
        </ul>
    )
    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total Amount :</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                {hasItems&&<button onClick={()=>alert('thank you for purchasing')}>Generate bill</button>}
            </div>
        </Modal>
    )
}
export default Cart;