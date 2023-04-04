import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div style={{background:"radial-gradient(circle, hsla(197, 74%, 43%, 1) 0%, hsla(27, 81%, 58%, 1) 100%)",height:"100vh"}}>
        <h2>PureComponent</h2>
        <h2 className="count-h">Counter: {count}</h2>
        <div className="btn-div">
        <button className="btn btn1" onClick={this.handleIncrement}>Increment</button>
        <button className="btn btn2" onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
