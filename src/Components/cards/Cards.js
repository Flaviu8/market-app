import Card from 'react-bootstrap/Card';
import './Cards.css'
import './Responsive-cards.css'
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from "react";





export default function Cards() {
  const [items, setItems] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:3001/items")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setItems(data)
        })
  }, []);

  if (!items) {
    return  <div className="loading">
    <h3> Sorry for inconvenience the items <span>is unavailable</span> :(</h3>
</div>
  }
  return (
    <CardGroup>
             {items.map((item) => {
          return (
               <Card key={item.id}>
                  <img src={item.imageUrl} width="200px" height="200px" alt="items"></img>
                    <Card.Body>
                      <Card.Title>{item.product}</Card.Title>
                      <Card.Text>
                          {item.price}
                </Card.Text>
               </Card.Body>
               <div className="input-field">
                            <button>-</button>
                            <input
                            type="text"
                            />
                            <button  >+</button>
                        </div>
                         <button className='CartBtn'>Add to cart</button>   
              </Card>
              
        
            
          );
        })}
      
    </CardGroup>
  );
}


  