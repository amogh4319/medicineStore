import React,{useState} from "react";
const MedicineForm=(props)=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
   

    const nameHandler=(event)=>{
        setName(event.target.value);
    }
    const descriptionHandler=(event)=>{
        setDescription(event.target.value);
    }
    const priceHandler=(event)=>{
        setPrice(event.target.value);
    }
    



    const submission=async(event)=>{
        event.preventDefault();
        const products={
            name:name,
            description:description,
            price:price
        }
        props.onSave(name,description,price);
        try{
        const response=await fetch('https://react-test3-product-default-rtdb.firebaseio.com/productList.json',{
            method:'POST',
            body:JSON.stringify(products),
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
    }
    return (
        <div>
            <form onSubmit={submission}>
                
            <label>Medicine Name:</label>
            <input type="text" onChange={nameHandler}/>
            <label>Description:</label>
            <input type="text" onChange={descriptionHandler}/>
            <label>price:</label>
            <input type="number" onChange={priceHandler}/>
            
            <div><button type="submit">Add Product</button></div>
            </form>
        </div>
        
    )
}
export default MedicineForm;