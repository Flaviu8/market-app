import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from "react";
import './Cards.css'



export default function Cards(props) {
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
  // let images = items.map(image => image.imageUrl)
  return (
    <CardGroup>
      <Card>
      <img src={items.map(image => image.imageUrl)}></img>
        <Card.Body>
          <Card.Title>{items.map(product => product.product)}</Card.Title>
          <Card.Text>
              {items.map(price => price.price)}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={items.map(image => image.imageUrl)}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/ad420a_520bee0ba61f4eb587f3f383295cf9b4~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_520bee0ba61f4eb587f3f383295cf9b4~mv2.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/ad420a_78a5484fc6be43f797a29759e65474fd~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_78a5484fc6be43f797a29759e65474fd~mv2.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/ad420a_ae535a2c88b3440a81465fd4399512bb~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_ae535a2c88b3440a81465fd4399512bb~mv2.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}


  