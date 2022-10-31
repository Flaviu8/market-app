import './App.css';

import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Chatbox from './Components/Chatbox/Chatbox';
import Cart from './Components/Cart/Cart';
import Pages from "./Components/Pages"





function App() {
  return (
 <>
     <Header/>
     <Pages />
     <Footer/>
     <Chatbox />
     <Cart />
   
  </>
  
    
  );
}

export default App;
