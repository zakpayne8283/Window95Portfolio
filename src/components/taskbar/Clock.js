import React from "react";

const dateFormat = {
  hour: "numeric",
  minute: "numeric"
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleString(undefined, dateFormat)
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(undefined, dateFormat)
    });
  }

  render() {
    return <div className="Clock">{this.state.time}</div>;
  }
}
