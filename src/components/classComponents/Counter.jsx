import React from "react";
import Button from "../shared/button/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCounter() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div>
        <h1 className="text">Count Value:</h1>
        <span className="countValueStyle">{this.state.count}</span>
        </div>
        <div>
        <Button onButtonClick={this.incrementCounter} label="increment" />
        <Button onButtonClick={this.decrementCounter} label="decrement" />
        </div>
      </div>
    );
  }
}

export default Counter;
