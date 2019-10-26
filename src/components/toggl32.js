import React, { useState, useContext } from "react";

// const { Provider, Consumer } = createContext();
// console.log("createContext()=>", createContext());
const ToggleContext = React.createContext();
const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      {children}
    </ToggleContext.Provider>
  );
};

// class Toggle extends Component {
// 	// static contextType = ToggleContext;
// 	state = {
// 		on: false,
// 		toggle: () => this.toggleIt()
// 	};

// 	toggleIt = () => {
// 		this.setState({
// 			on: !this.state.on
// 		});
// 	};
// 	render() {
// 		const { children } = this.props;

// 		return (
// 			<ToggleContext.Provider value={this.state}>
// 				{children}
// 			</ToggleContext.Provider>
// 		);
// 	}
// }
// Toggle.contextType = ToggleContext;

// console.log("Provider->", Provider);

const ToggleOn = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

const ToggleOff = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return !on ? children : null;
};

const ToggleButton = () => {
  const { on, toggle } = useContext(ToggleContext);
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
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <span>Hello</span>
      <ToggleButton />
    </Toggle>
  );
};

export default usage;
