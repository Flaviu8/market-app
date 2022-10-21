import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/paper-bag-groceries-wooden-table-against-blue-background-paper-bag-groceries-wooden-table-against-light-blue-157751360.jpg"
            alt="First slide" width='1300px' height='700px'
          />
          <Carousel.Caption>
            <h1>FRESH MARKET</h1>
            <h2>WE'LL DELIVER EVERYTHING YOU NEED</h2>
            <button>Shop Online</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg"
            alt="Second slide" width='1300px' height='700px'
          />
          
          <Carousel.Caption>
          <h1>FRESH MARKET</h1>
            <h2>WE'LL DELIVER EVERYTHING YOU NEED</h2>
            <button>Shop Online</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://securecdn.pymnts.com/wp-content/uploads/2021/04/Shopify-GreenDropShip.jpg"
            alt="Third slide" width='1300px' height='700px'
          />
  
          <Carousel.Caption>
          <h1>FRESH MARKET</h1>
            <h2>WE'LL DELIVER EVERYTHING YOU NEED</h2>
            <button>Shop Online</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MyCarousel;