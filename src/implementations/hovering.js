import React from "react";

class Hover extends React.Component {
  state = { hovering: false };
  render() {
    return (
      <div
        onMouseOver={() => {
          this.setState({ hovering: true });
        }}
        onMouseOut={() => {
          this.setState({ hovering: false });
        }}
      >
        {this.props.render(this.state.hovering)}
      </div>
    );
  }
}
export default Hover;
