import React, { Component } from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		};
		console.log(this.state.homeLink);

		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 3000);
	}
	onMakeOlder() {
		this.setState({
			age: this.state.age + 1
		});
	};

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		})
		this.props.changeLink(event.target.value);
	}

	render() {
		return (
			<div>
				<h4>Props</h4>
				<p>Your name is {this.props.name} and you are {this.props.initialAge} years old.</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<hr />


				<h4>Looping through props with map()</h4>
				<p>{this.props.user.name} hobbies are:</p>
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
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
				{/* different syntax 
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				*/}
				<hr />

				<h4>Communication between Parent and Child Component</h4>
				<p>Click to say "Hello"</p>
				<button onClick={this.props.greet} className="btn btn-primary">Hello</button>
				<hr />

				<h4>Passing Data between Parent and Child Components + Two Way Binding</h4>
				<p>Change header name</p>
				<input type="text" value={this.state.homeLink}
					onChange={(event) => this.onHandleChange(event)} />
				<br />
				<br />
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change header</button>
				<hr />

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