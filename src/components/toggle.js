import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return React.Children.map(children, child => {
    console.log("child=>", child.type.name);
    if (!child.type.name) {
      return React.cloneElement(child);
    } else {
      return React.cloneElement(child, { on, toggle });
    }
  });
};

const ToggleOn = ({ on, children }) => {
  return on ? children : null;
};
const ToggleOff = ({ on, children }) => {
  return !on ? children : null;
};

const ToggleButton = ({ on, toggle, ...props }) => {
  return (
    <button
      style={{
        padding: "2%",
        margin: "2%",
        borderRadius: 12,
        color: "white",
        backgroundColor: on ? "green" : "crimson",
        cursor: "pointer"
      }}
      onClick={() => toggle()}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
};
const usage = () => {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  );
};

export default usage;
