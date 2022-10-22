import './Responsive-GrabnGo.css'
import './GrabnGo.css'
import React, { useEffect, useState } from 'react';





 const GrabnGo = () => {
    const [count, setCount] = useState([
        { itemCount: 1, id: 1,  value: 0 },
        { itemCount: 2, id: 2,  value: 0 },
        { itemCount: 3, id: 3,  value: 0 },
        { itemCount: 4, id: 4,  value: 0 },
        { itemCount: 5, id: 5,  value: 0 },
        { itemCount: 6, id: 6,  value: 0 },
        { itemCount: 7, id: 7,  value: 0 }
     
    
    ]);
    const [products, setProducts] = useState(null);

    // const Itemincrease = (itemCount) =>  {
    //     setCount(count.map((countitem)=>{
    //         return countitem.itemCount === itemCount 
    //         ? {
    //             ...countitem,
    //             value: countitem.value + 1,
        
    //         }  : countitem;
    //     })
    //     )
    // }

    const Itemincrease = () => {
    
        console.log("click")
    }

    useEffect(() => {
        fetch("http://localhost:3001/items")
            .then(res => {
              return res.json()
            })
            .then(data => {
              setProducts(data)
            })
      }, []);
    
      if (!products) {
        return  <div></div>
    
        }   
   return (
        <div className="items-container">
            <div className='title'>         
                <h2> Grab 'N Go</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div className="items" >
              {products.map((item) => {
                return (
                    <div className="item" key={item.id}>
                        <img src={item.imageUrl} alt="img" width="150px" />
                        <h5>{item.product}</h5>
                        <p>{item.price}</p>
                        <p>Description</p>
                        <div className="input-field">
                            <button>-</button>
                            <input
                            type="text"
                            value={count.value}
                            onChange={(e) => setCount(e.target.value)}
                            />
                            <button onClick={Itemincrease} >+</button>
                        </div>
                         <button className='CartBtn'>Add to cart</button>
                    </div>
               

                    );
                    })}
            
            </div>
        </div>  


)
} 

export default GrabnGo;

