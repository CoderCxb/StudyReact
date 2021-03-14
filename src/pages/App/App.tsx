import './App.css';
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LifeCycle from '../LifeCycle/LifeCycle';
import HttpRequest from '../HttpRequest/HttpRequest';
import UseRedux from '../UseRedux/UseRedux';
import {Provider} from 'react-redux';
import goods from "../../redux/goods/goods";

const history = createBrowserHistory();

class App extends Component {
	goLifeCycle=()=>{
		history.push('/life-cycle');
	}
	render() {
		return <div className="App">
		<Router history={history}>
			<Link to="/life-cycle">生命周期</Link>
			<Link to="/http-request">网络请求</Link>
			<Link to="/use-redux">使用redux</Link>
			<button onClick={this.goLifeCycle}>测试</button>

			<Route path="/life-cycle" component={LifeCycle}></Route>
			<Route path="/http-request" component={HttpRequest}></Route>
			{/* <Route path="/use-redux" component={UseRedux}></Route> */}
			
			{/* <Redirect to="/xxx"></Redirect> */}
		</Router>
		<Provider store={goods}>
			<UseRedux />
		</Provider>
	</div>;
	}
}

export default App;
