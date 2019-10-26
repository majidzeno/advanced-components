import React from "react";

const Tooltip = () => (
  <div
    style={{
      position: "absolute",
      border: "1px solid grey",
      borderRadius: 12,
      maxWidth: "30%",
      borderBottomLeftRadius: 0,
      left: "50%",
      top: "-360%",
      backgroundColor: "antiquewhite",
      padding: "1%"
    }}
  >
    We diminution preference thoroughly if. Joy deal pain view much her time.
  </div>
);

class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div
        style={{ height: "100%", border: "2px solid red" }}
        onMouseMove={this.handleMouseMove}
      >
        <h1>Move the mouse around!</h1>
        {console.log("test")}
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
        <div
          style={{
            position: "relative",
            border: "2px solid blue"
          }}
        >
          {this.props.hovering ? <Tooltip /> : null}
          <svg
            className="Icon-svg Icon--hoverable-svg"
            height={this.props.height}
            viewBox="0 0 16 16"
            width="16"
            style={{
              cursor: "pointer"
            }}
          >
            <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </div>
      </div>
    );
  }
}
export const Componenet1 = props => {
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          padding: "2%",
          position: "relative"
        }}
      >
        {props.hovering ? <Tooltip /> : null}
        Componenet 1 in the house
      </div>
    </>
  );
};
export const Componenet2 = props => {
  return (
    <>
      {props.hovering ? <Tooltip /> : null}

      <div style={{ border: "1px solid blue", padding: "2%" }}>
        Componenet 2 in the house
      </div>
    </>
  );
};
export const Componenet3 = props => {
  return (
    <>
      {props.hovering ? <Tooltip /> : null}

      <div style={{ border: "1px solid blue", padding: "2%" }}>
        Componenet 3 in the house
      </div>
    </>
  );
};
export default MouseTracker;
