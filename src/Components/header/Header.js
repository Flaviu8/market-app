import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../header/Header.css'
import '../header/Responsive-header.css'
import Icon from '../header/user.png'
import Shoppingbag from '../header/bag.png'
import Search from '../header/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {

  const[show, setShow] = useState(false) 
  const handleClickBtn = () => {
      setShow(!show)
      console.log(show)
  }

    
    return (
      
    
<div className='header'>
          <Navbar bg="transparent" expand="sm">
            <Container>
              <Navbar.Brand className="navbar-brand" to='/'> <img src='https://cdn.pixabay.com/photo/2014/04/03/11/57/basket-312684_1280.png' alt='basket' width="30px" to='/'></img> Fresh Market</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link active text-success" aria-current="page" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="shop">Shop</NavLink>
                  <NavLink className="nav-link" to="about">About</NavLink>
                  <NavLink className="nav-link" to="contact">Contact</NavLink>
                </Nav>
                <div className='search-input'>
                <input
                
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  />
              <img src={Search} alt="search-icon"/>
              </div>            
              </Navbar.Collapse>
              <a className="login" href='/'><img src={Icon} alt='icon' width='30px'></img>Log in</a>
              <button className="cart-btn" onClick={handleClickBtn}><img src={Shoppingbag} alt='shopping-bag' width='30px' href='/'></img></button>
                  {
                    show ?  <Cart handleClickBtn={handleClickBtn}/> : ''
                  }
          </Container>
        </Navbar>
</div>

      
    )
  }


  export default Header





