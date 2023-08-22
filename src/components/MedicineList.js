import React from "react";
import CartForm from "./CartForm";
const MedicineList=(props)=>{
    
    
    return (
        <div>
            <ul>
                {props.items.map((item)=>(
                    <li key={item.id}>Name:{item.name}, Description:{item.description} ,Price:{item.price} 
                    <CartForm id={item.id} amount={item.amount} item={item}  />
                    </li>
                 
                ))}
            </ul>
        </div>
    )
}
export default MedicineList;