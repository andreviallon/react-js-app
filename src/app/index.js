import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }

  onGreet() {
    alert("Hello");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let user = {
      name: "Max",
      hobbies: ["Tennis", "Music", "Video games"],
      age: 21
    };

    let homeCmp = "";

    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Andre"}
          initialAge={22}
          user={user}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        >
          <p>This paragraph is a child of Home</p>
        </Home>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm12 col-sm-offset-0 col-md-10 col-md-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm12 col-sm-offset-0 col-md-10 col-md-offset-1">
            <button
              onClick={this.onChangeHomeMounted.bind(this)}
              className="btn btn-primary"
            >
              (Un)mount Home Component
            </button>
            <hr />
            {homeCmp}
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
