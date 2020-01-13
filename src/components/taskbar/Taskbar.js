import React from "react";

import Clock from "./Clock";

import "./Taskbar.css";

export default class Taskbar extends React.Component {
  render() {
    return (
      <div className="Taskbar">
        <button className="StartMenu">
          <img
            src="data:image/png;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAA/wAA/wAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREAEAAEABAQEQARAEQAEAAAABEARAAAIiIAAQBAACAgIgAAAAAAIAAAACAAAwAAAAAAIgAzAAAAAAAiADMAAAAAAAIAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAwf4AAFB4AAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAAwAAAAFAAAAB8AAAA/gEAAP+HAAD//wAA"
            alt="Windows Icon"
          />
          <div>Start</div>
        </button>
        <div className="SystemTray">
          <Clock />
        </div>
      </div>
    );
  }
}
