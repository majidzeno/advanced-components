import React, { useState } from "react";

const ToggleContext = React.createContext();

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
const useToggle = () => {
  return React.useContext(ToggleContext);
};

const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};
const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return !on ? children : null;
};

const ToggleButton = ({ ...props }) => {
  const { on, toggle } = useToggle();
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
      onClick={toggle}
      {...props}
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
