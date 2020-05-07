import React from "react";

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
  }
  //   handleOnMouseOver() {
  //     console.log("Hello World**");
  //   }
  render() {
    console.log(this.props.direction);
    return (
      <div
        style={{
          marginTop: -120,
          width: 230,
          backgroundColor: "gray",
          marginLeft: -20,
          boxShadow: "1px 3px 1px #9E9E9E",
        }}
      >
        <h1>Tool Tip</h1>
        <div></div>
      </div>
    );
  }
}

export default ToolTip;
