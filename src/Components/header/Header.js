import React from 'react'
import '../header/Header.css'
import '../header/Responsive-header.css'
import Icon from '../header/user.png'
import Shoppingbag from '../header/bag.png'
import Search from '../header/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../carousel/Carousel'
import SearchbarDropdown from '../Hooks/Search'
import { useEffect } from 'react'







const Header = (props) => {

 
    return (
    
    <div className='header'>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
     <a className="navbar-brand" href='/'> <img src='https://cdn.pixabay.com/photo/2014/04/03/11/57/basket-312684_1280.png' alt='basket' width="30px" href='/'></img> Fresh Market</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-success" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input> */}
        <SearchbarDropdown/>
 
        <img src={Search} alt='search' width='30px' height='30px'></img>
      </form>
      <a className="login" href='/'><img src={Icon} alt='icon' width='30px'></img>Log in</a>
      <img src={Shoppingbag} alt='shopping-bag' width='30px' href='/'></img>
    </div>
  </div>
</nav>

<MyCarousel/>
  </div>
      
    )
  }


  export default Header