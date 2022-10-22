import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import './Cards.css'
import './Responsive-cards.css'
import CardGroup from 'react-bootstrap/CardGroup';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation } from "swiper";






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
      <Swiper
            
            loop={false}
            navigation={true}
            slidesPerView={3}
            spaceBetween={5}
            className="mySwiper"
            modules={[ Navigation]}
            breakpoints={{
              "@0.23": {
                slidesPerView: 1,
                spaceBetween: 4,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            >

             {items.map((item) => {
          return (

      <SwiperSlide key={item.id}>
          <Card >
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
    </SwiperSlide>


            
          );
        })}
      </Swiper>
    </CardGroup>

  );
}

