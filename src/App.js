import './App.css';
import Header from './Components/header/Header'
import Main from './Components/main/Main';
import Footer from './Components/footer/Footer';
import Chatbox from './Components/Chatbox/Chatbox'
import Cart from './Components/Cart/Cart';

function App() {
  return (<>
    <Header/>
    <Main/>
    <Footer/>
    <Chatbox />
    <Cart />
    </>
  );
}

export default App;
