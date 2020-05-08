import React from "react";
import Tooltip from "./tooltip";
import ReactDOM from "react-dom";

var array = ["left", "right", "top", "bottom"];
class btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      coordinatesOfButton: null,
      direction: null,
    };
  }

  handleOnMouseOver() {
    console.log("Hello world");
    let coordinatesButton = ReactDOM.findDOMNode(this);
    let directionOfToolTip = array[Math.floor(Math.random() * array.length)];
    console.log(directionOfToolTip);
    this.setState({
      showTooltip: true,
      coordinatesOfButton: coordinatesButton,
      direction: directionOfToolTip,
    });
  }
  handleOnMouseLeave() {
    console.log("Leaving the button");
    this.setState({
      showTooltip: false,
    });
  }
  render() {
    return (
      <div style={{ height: 500, width: 500 }}>
        <button
          onMouseOver={this.handleOnMouseOver.bind(this)}
          onMouseLeave={this.handleOnMouseLeave.bind(this)}
          style={{
            height: 100,
            width: 200,
            backgroundColor: "magenta",
            marginTop: 200,
            fontSize: "large",
          }}
        >
          Press
          {this.state.showTooltip === true ? (
            <Tooltip
              coordinatesOfButton={this.state.coordinatesOfButton}
              direction={this.state.direction}
            />
          ) : null}
        </button>
      </div>
    );
  }
}

export default btn;
