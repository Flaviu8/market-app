import About from '../pages/About/About';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import Shop from '../pages/Shop/Shop';
import Contact from '../pages/Contact/Contact'



const Pages = () => {

    return (

<Routes>
    <Route path='/' element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path='shop' element={<Shop />} />
    <Route path="contact" element={<Contact />} />
</Routes>
    )

}

export default Pages;
