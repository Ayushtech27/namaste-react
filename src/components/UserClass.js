import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        twitter_username: "xyz",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ayushtech27");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("Component did update is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }

  render() {
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Twitter: {twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * ----MOUNTING LIFE CYCLE----
 * Constructor (Dummy)
 * Render (Dummy)
 *         <HTML Dummy>
 * componentDidMount
 *         <API Call>
 *         <this.setState> -> state data is updated
 *
 * ----UPDATE LIFE CYCLE----
 *        render(api data)
 *        <HTML (new api data)>
 *        componentDidUpdate
 *
 */
