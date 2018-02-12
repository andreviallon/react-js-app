import React, { Component } from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge
		};
	}
	onMakeOlder() {
		this.setState({
			age: this.state.age + 1
		});
	};
	render() {
		return (
			<div>
				<h4>Props</h4>
				<p>Your name is {this.props.name} and you are {this.props.initialAge} years old.</p>
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
				<p>My age is {this.state.age}</p>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>

				{/* different syntax 
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				*/}


			</div>
		);
	}
}

// Home.propType = {
// 	name: React.PropTypes.string,
// 	initialAge: React.PropTypes.number,
// 	user: React.PropTypes.object,
// 	children: React.PropTypes.element.isRequired
// };

