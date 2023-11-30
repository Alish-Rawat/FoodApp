import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      // id: "",
      // avatar_url: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Alish-Rawat");
    const json = await data.json();
    this.setState(json);
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        {/* <h1>Profile Class Based Component</h1>; */}
        <h2> Name: {this.state.login} Claas BAsed </h2>
        <h3> {this.state.id}</h3>
        <img src={this.state.avatar_url} />
        <button
          onClick={() => {
            this.setState({
              count: 2,
            });
          }}
        >
          bttn
        </button>
      </div>
    );
  }
}

export default ProfileClass;
