import React from "react";
import Weeklydeals from '../weeklydeals/Weeklydeals'
import GrabnGo from "../grabngo/GrabnGo";
import Delivery from "../delivery/Delivery";
import MyCarousel from "../carousel/Carousel"



const Main = () => {
    return <>
        <MyCarousel/>
        <Weeklydeals/>
        <GrabnGo/>
        <Delivery/>
    </>
}

export default Main;


