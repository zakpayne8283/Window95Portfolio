import React from "react";
import "./styles.css";

import Desktop from "./components/desktop/Desktop";
import Taskbar from "./components/taskbar/Taskbar";

export default function App() {
  return (
    <div className="App">
      <Desktop />
      <Taskbar />
    </div>
  );
}
