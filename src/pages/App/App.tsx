import './App.css';
import React, { Children, Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LifeCycle from '../LifeCycle/LifeCycle';
import HttpRequest from '../HttpRequest/HttpRequest';
const history = createBrowserHistory();
let template = (
	<div className="App">
		<Router history={history}>
			<Link to="/life-cycle">生命周期</Link>
			<Link to="/http-request">网络请求</Link>
			{/* <Link to=''></Link> */}

			{/* <Route></Route> */}
			<Route path="/life-cycle" component={LifeCycle}></Route>
			<Route path="/http-request" component={HttpRequest}></Route>
		</Router>
	</div>
);

class App extends Component {
	render() {
		return template;
	}
}

export default App;
