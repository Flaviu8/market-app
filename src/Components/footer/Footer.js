import React from "react";
import './Footer.css'
import Facebook from './facebook.png'
import Youtube from './youtube.png'
import Instagram from './instagram.png'



const Footer = () => {
    return (
    <div className="footer">
        <div className="main">
        <div className="store">
            <h5>STORE</h5>
            <a href="/">Shop All</a>
            <a href="/">Shipping & Returns</a>
            <a href="/">Store Policy</a>
            <a href="/">FAQ</a>
        </div>

        <div className="address">
            <h5>ADDRESS</h5>
            <p>500 Terry Francois Street San Francisco, CA 94158</p>
        </div>
        
        <div className="opening-hours">
            <h5>OPENING HOURS</h5>
        <div className="span">
            <span>Mon-Fri: 7am-10pm</span>
            <span>Saturday: 8am-10pm</span>
            <span>Sunday: 8am-11pm</span>
        </div>
        </div>
        
        <div className="get-fresh">
            <h5>GET IT FRESH</h5>
            <span>Email*</span>
            <input type="text"></input>
            <button>SUBSCRIBE NOW</button>
        </div>
        </div>
        
        <div className="company-trademarks">
            <p> &copy; 2023 by Fresh Market.Proudly created with Wix.com</p>
        </div>
        <div className="icons">
            <img src={Youtube} width='35px' height='50px' ></img>
            <img src={Instagram} width='35px' height='35px'></img>
            <img src={Facebook} width='43px' height='40px'></img>
        </div>
    </div>
    )
}


export default Footer;