import { useEffect, useState} from 'react'
import './Cart.css'
import  Icon  from '../Cart/right-arrow.png'
import Main from '../main/Main'



function Cart({show}) {

      if(show) {
     return (
           
           <div className='cart-container'>
                <div className='cart-header'>
                  <button ><img src={Icon} alt="icon"></img></button>
                   <h2>Cart</h2>
                </div>
                      <p>Cart is empty!</p>
              </div>
                 
      
      }
)} 
} 




export default Cart;
