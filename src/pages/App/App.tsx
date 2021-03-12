import './App.css';
import React, { Component } from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LifeCycle from '../LifeCycle/LifeCycle';
import HttpRequest from '../HttpRequest/HttpRequest';
import ShowRouter from '../ShowRouter/ShowRouter';
const history = createBrowserHistory();
let template = (
	<div className="App">
		<Router history={history}>
			<Link to="/life-cycle">生命周期</Link>
			<Link to="/http-request">网络请求</Link>
			<Link
				to={{
					pathname: '/show-router/2',
					search: 'name=marco',
				}}
			>
				演示路由
			</Link>
			{/* <Redirect to="/http-request"></Redirect> */}

			{/* <Route></Route> */}
			<Route exact path="/*" component={() => <div>主页</div>}></Route>
			<Route path="/life-cycle" component={LifeCycle}></Route>
			<Route path="/http-request" component={HttpRequest}></Route>
			<Route path="/show-router/:id" component={ShowRouter}></Route>
		</Router>
	</div>
);

class App extends Component {
	render() {
		return template;
	}
}

export default App;
