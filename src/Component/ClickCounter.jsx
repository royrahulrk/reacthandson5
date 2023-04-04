import React from "react";
import HocComponent from "./HocComponent";
import "./Counter.css"
const ClickCounter = (props) => {
    console.log(props)

    const Counter=props.count
  return (
    <div style={{background:"radial-gradient(circle, hsla(197, 94%, 51%, 1) 0%, hsla(348, 84%, 55%, 1) 100%)",height:"100vh"}}>
      <h2>Higher-Order Components</h2>
      <h2 className="count-h">Counter: {Counter}</h2>
      <div className="btn-div" >
        <button className="btn btn1" onClick={props.incrementCount}>Increment</button>
        <button className="btn btn2" onClick={props.decrementCount}>Decrement</button>
      </div>
    </div>
  );
};

export default HocComponent(ClickCounter)
