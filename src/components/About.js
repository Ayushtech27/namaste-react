import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React web series</h2>
        <UserClass name="First" location="New Delhi" />
      </div>
    );
  }
}

export default About;
