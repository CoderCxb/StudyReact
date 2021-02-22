import React, { Component } from 'react';
import { HomeProps, HomeState } from './Home.type';
import {Link, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history =createBrowserHistory()
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
				<Router history={history}>
				<div><Link to='new'>新闻</Link></div>
				<div><Link to='hot'>热门</Link></div>
				</Router>

				<Router history={history}>
						<Route path="/new">
							<div>这是一条新闻</div>
						</Route>
						<Route path="/hot">
							<div>这是一个热门</div>
						</Route>
				</Router>
			</div>
		);
	}
}

export default Home;
