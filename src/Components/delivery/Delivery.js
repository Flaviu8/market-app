import React from "react";
import icon from './plastic-bag.png'
import './Delivery.css'
import './Responsive-delivery.css'
import mask from './mask.png'
import van from './van.png'


const Delivery = () => {

    return (
        <div className="delivery-container">
            <div className="options">
                <img src={icon} alt="icon" width='60px'></img>
                <h4>Pick Up Options</h4>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>

            <div className="same-day">
                <img src={van} alt="icon" width='60px'></img>
                <h4>Pick Up Options</h4>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>

            <div className="health">
                <img src={mask} alt="icon" width='60px'></img>
                <h4>Pick Up Options</h4>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
        </div>
    )
}

export default Delivery;