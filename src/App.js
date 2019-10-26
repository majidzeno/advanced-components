import React from "react";
import "./App.scss";
import MouseTracker from "./implementations/renderProps";
import Header from "./components/header";
import {
  Componenet1,
  Componenet2,
  Componenet3
} from "./implementations/renderProps";
import Hover from "./implementations/hovering";
// import Toggle from "./components/toggl32";
function App() {
  return (
    <div className="App" style={{ borderColor: "blue", borderWidth: 15 }}>
      <Header />
      <h2>yow yow</h2>
      <Hover render={hovering => <MouseTracker hovering={hovering} />}></Hover>
      <Hover render={hovering => <Componenet1 hovering={hovering} />}></Hover>
      <Hover render={hovering => <Componenet2 hovering={hovering} />}></Hover>
      <Hover render={hovering => <Componenet3 hovering={hovering} />}></Hover>
    </div>
  );
}

export default App;
