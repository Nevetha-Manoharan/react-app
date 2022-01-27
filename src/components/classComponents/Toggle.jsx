import React from "react";
import ToggleStatus from "../pureComponents/ToggleStatus";
import Button from "../shared/button/Button";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      status: !this.state.status,
    });
  }
  render() {
    return React.createElement(
      "div",
      {className:'container'},
      React.createElement(Button, { onButtonClick: this.handleClick, label: "toggle", className:'toggleButton'} ),
      React.createElement(ToggleStatus, { status: this.state.status })
    );
  }
}
export default Toggle;
