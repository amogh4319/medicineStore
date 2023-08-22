import React,{useState} from 'react';
import './App.css';
import CartButton from './components/CartButton';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/Cart';



function App() {
  const [list,setUpdatedList]=useState([]);
  const [cartIsShown,setCartisShown]=useState(false);
  const showCartHandler=()=>{
    setCartisShown(true);
  }
  const hideCartHandler=()=>{
    setCartisShown(false);
  }
  const addToList=(uName,uDescription,uPrice)=>{
    setUpdatedList((prevList)=>{
      return [...prevList,{name:uName,description:uDescription,price:uPrice,id:Math.random().toString()}];
    })

  }
  return (
  
    <CartProvider>
      
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
      <main>
      <MedicineForm onSave={addToList}/>
      </main>
      
      <CartButton onShowCart={showCartHandler}/>
      
      
      <MedicineList items={list}/>
      
      
      
      
      
      
      
      
    </CartProvider>
    
  
      
    
  );
}

export default App;
