import React from "react";
import 'leaflet/dist/leaflet.css';
import '../Contact/Contact.css'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'





const Contact = () => {
    const position = [51.505, -0.09]

    return (
        <div className="contact-container">
            <div className="contact-title">
                <h4>Contact Us</h4>
                <p>I'm a paragraph. Click here to add your own text
                     and edit me. It’s easy. Just click “Edit Text” 
                     or double click me to add your own content 
                     and make changes to the font. Feel free to drag 
                     and drop me anywhere you like on your page. </p>
            </div>

            <div className="main">
                <div className="contact">
                    <h6>CONTACT</h6>
                    <span>Tel: 123-456-7890</span>
                    <span>Email: info@mysite.com</span>
                </div>

                <div className="address">
                    <h6>ADDRESS</h6>
                    <p>500 Terry Francois Street San Francisco, CA 94158</p>
                </div>

                <div className="opening-hours">
                    <h6>OPENING HOURS</h6>
                <div className="span">
                    <span>Mon-Fri: 7am-10pm</span>
                    <span>Saturday: 8am-10pm</span>
                    <span>Sunday: 8am-11pm</span>
                </div>
                </div>
                </div>
                    <form>
                      <div className="contact-container-form">
                        <div className="contact-input">
                            <span>First Name *</span>
                            <input type="text"></input>
                            <span>Email *</span>
                            <input type="text"></input>
                        </div>
                        <div className="contact-input">
                            <span>Last Name *</span>
                            <input type="text"></input>
                            <span>Subject *</span>
                            <input type="text"></input>
                        </div>
                       </div>         
                    <div className="contact-message">  
                             <span>Type your message here...*</span>
                            <textarea type="text"></textarea> 
                        </div>
                        <button>Submit</button>
                    </form>

               
                
                    <MapContainer style={{ height: '400px', width: '70%', margin: 'auto', marginTop: '10em', marginBottom: '4em'}}  center={position} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
        
                
               
            

        </div>

              
    )
}

export default Contact;