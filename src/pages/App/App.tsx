import './App.css';
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LifeCycle from '../LifeCycle/LifeCycle';
import HttpRequest from '../HttpRequest/HttpRequest';
import { Provider } from 'react-redux';
import UseHooks from '../UseHooks/UseHooks';
import UseRedux from '../UseRedux/UseRedux';
import { store } from '../../redux';
import Base from '../Base/Base';
import { MyContext, defaultContext } from '../context';
import UseContext from '../UseContext/UseContext';

const history = createBrowserHistory();

class App extends Component {
	state = {
		name: 'xxxx',
	};
	goLifeCycle = () => {
		history.push('/life-cycle');
	};
	render() {
		return (
			<div className="App">
				<MyContext.Provider value={defaultContext}>
					<UseContext></UseContext>
				</MyContext.Provider>
				<Router history={history}>
					<Link to="/life-cycle">生命周期</Link>
					<Link to="/http-request">网络请求</Link>
					<Link to="/use-redux">使用redux</Link>
					<Link to="/use-hooks">使用hooks</Link>

					<Route path="/life-cycle" component={LifeCycle}></Route>
					<Route path="/http-request" component={HttpRequest}></Route>
					<Route path="/use-hooks" component={UseHooks}></Route>
					{/* <Route path="/use-redux" component={UseRedux}></Route> */}

					{/* <Redirect to="/xxx"></Redirect> */}
				</Router>
				<Provider store={store}>
					<UseRedux />
				</Provider>
				<Base></Base>
			</div>
		);
	}
}

export default App;
