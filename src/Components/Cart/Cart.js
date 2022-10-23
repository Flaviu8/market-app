import { useEffect, useState} from 'react'
import './Cart.css'
import  Icon  from '../Cart/right-arrow.png'




function Cart() {
      const [showCart, setShowCart] = useState(true)

      const HandleClickCartBtn = () => {
        setShowCart(!showCart)
        console.log('click')
      }
    

if (showCart) {
  return (
        <div className='cart-container'>
          <div className='cart-header'>
            <button onClick={HandleClickCartBtn}><img src={Icon}></img></button>
             <h2>Cart</h2>
          </div>
          <p>Cart is empty!</p>
        </div>
    
  
  );
}
}



export default Cart;