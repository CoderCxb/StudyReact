import React, { Component } from 'react';
import { HomeProps, HomeState } from './Home.type';

class Home extends Component<HomeProps> {
	state: HomeState;
	constructor(props: HomeProps | Readonly<HomeProps>) {
		super(props);
		this.state = {
			name: 'marco',
		};
		console.log(props.src);
	}
	changeName = () => {
		this.setState({
			name: 'polo',
		});
	};
	render() {
		return (
			<div>
				<div>name:{this.state.name}</div>
				<div>
					<button onClick={this.changeName}>改名</button>
				</div>
			</div>
		);
	}
}

export default Home;
