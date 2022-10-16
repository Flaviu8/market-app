// import { useState } from "react";
// import CounterItem from "./Counter-item";

// // ES5
// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello World</h1>
// //     </div>
// //   );
// // }

// // ES6
// const Counter = () => {

//   const [countAll, setCounterAll] = useState(0);
//   const [count, setCounter] = useState(0)


//   const increaseAllBtnEvent = () => {
//     setCounterAll(count + 1)
//   }


//   const decreaseAllBtnEvent = () => {
//     setCounterAll(count - 1)
//   }

//   const increaseBtnEvent = () => {
//     setCounter(count + 1)
// }

//   return (
//     <div className="counter">
//         {/* <CounterItem
//             increaseBtn={'+'}
//             decreaseBtn={'-'}
//             value={count}
//             increaseBtnEvent={increaseBtn}
//         /> */}

// <CounterItem
//             increaseBtn={'+'}
//             decreaseBtn={'-'}
//             value={count}
//             increaseBtnEvent={increaseAllBtnEvent}
//         />

// <CounterItem
//             increaseBtn={'+'}
//             decreaseBtn={'-'}
//             value={count}
//             increaseBtnEvent={increaseAllBtnEvent}
//         />

// <CounterItem
//             increaseAllBtn={'+'}
//             decreaseAllBtn={'-'}
//             value={countAll}
//             increaseAllBtnEvent={increaseAllBtnEvent}
//             decreaseAllBtnEvent={decreaseAllBtnEvent}
           
//         />

//     </div>
//   );
// }

// export default Counter;