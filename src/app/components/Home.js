import React, { Component } from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName,
      initialText: "Initial Text"
    };
    setTimeout(() => {
      this.setState({ status: 1 });
    }, 3000);
    console.log("Constructor");
  }

  //Component Lifecycle, in order

  //Immidiately before initial rendring
  componentWillMount() {
    console.log("Component will mount");
  }

  //Immidiately after initial rendring
  componentDidMount() {
    console.log("Component did mount");
  }

  //When component receive new props
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  //Before rendering, after receiving new props or state
  //Return false to prevent rendering
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update?", nextProps, nextState);
    return true;
  }

  //Before rendering, after receiving new props or state
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  //After component's updates are flushed to DOM
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  //Immediately before removing component from DOM
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  // Component Lifecycle end

  onMakeOlder() {
    this.setState({ age: this.state.age + 1 });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({ homeLink: event.target.value });
    // Extra line to make the changes live and not on click
    // this.props.changeLink(event.target.value);
  }

  onHandleChangeText(event) {
    this.setState({ initialText: event.target.value });
  }

  render() {
    return (
      <div>
        <h4>Props</h4>
        <p>
          Your name is {this.props.name} and you are {this.props.initialAge}{" "}
          years old.
        </p>
        <p>User Object => Name: {this.props.user.name}</p>
        <hr />

        <h4>Looping through props with map()</h4>
        <p>{this.props.user.name}'s hobbies are:</p>
        <ul>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <hr />

        <h4>Children</h4>
        {this.props.children}
        <hr />

        <h4>Events & States</h4>
        <p>Change statue with setTimeout</p>
        <p>Status: {this.state.status}</p>

        <p>My age is {this.state.age}</p>
        <button
          onClick={this.onMakeOlder.bind(this)}
          className="btn btn-primary"
        >
          Make me older!
        </button>
        {/* different syntax with arrow function =>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				*/}
        <hr />

        <h4>Communication between Parent and Child Component</h4>
        <p>Click to say "Hello"</p>
        <button onClick={this.props.greet} className="btn btn-primary">
          Hello
        </button>
        <hr />

        <h4>Passing data between Parent and Child component</h4>
        <p>Change header name onClick</p>
        <input
          type="text"
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <br />
        <br />
        <button
          onClick={this.onChangeLink.bind(this)}
          className="btn btn-primary"
        >
          Change header
        </button>
        <hr />

        <h4>Two way data binding with live change</h4>
        <p>Change the text bellow dynamically</p>
        <p>{this.state.initialText}</p>
        <input
          type="text"
          value={this.state.initialText}
          onChange={event => this.onHandleChangeText(event)}
        />
      </div>
    );
  }
}

// Home.propTypes = {
// 	name: React.PropTypes.string,
// 	initialAge: React.PropTypes.number,
// 	user: React.PropTypes.object,
// 	children: React.PropTypes.element.isRequired
//  greet: React.PropTypes.func
// };
