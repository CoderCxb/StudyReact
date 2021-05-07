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
import UseAntd from '../UseAntd/UseAntd';

const history = createBrowserHistory();

class App extends Component {
	static getDerivedStateFromError(error: Error) {
		console.log(error);
		// 更新 state 使下一次渲染能够显示降级后的 UI
		// return { hasError: true };
	}
	componentDidCatch(error: Error, errorInfo: any) {
		// 你同样可以将错误日志上报给服务器
		console.log(error, errorInfo);
	}
	goLifeCycle = () => {
		history.push('/life-cycle');
	};
	lf: any;
	componentDidMount() {
		console.log(this.lf);
	}
	render() {
		return (
			<div className="App">
				<input type="text" />
				<MyContext.Provider value={defaultContext}>
					{/* Context的用法一 */}
					<MyContext.Consumer>
						{(value) => <UseContext {...value}></UseContext>}
					</MyContext.Consumer>
					{/* <UseContext></UseContext> */}
				</MyContext.Provider>
				<Router history={history}>
					<Link to="/life-cycle">生命周期</Link>
					<Link to="/http-request">网络请求</Link>
					<Link to="/use-redux">使用redux</Link>
					<Link to="/use-hooks">使用hooks</Link>

					<Route
						path="/life-cycle"
						ref={(lf) => (this.lf = lf)}
						component={LifeCycle}
					></Route>
					<Route path="/http-request" component={HttpRequest}></Route>
					<Route path="/use-hooks" component={UseHooks}></Route>
					{/* <Route path="/use-redux" component={UseRedux}></Route> */}

					{/* <Redirect to="/xxx"></Redirect> */}
				</Router>
				<Provider store={store}>
					<UseRedux />
				</Provider>
				<UseAntd></UseAntd>
				<Base></Base>
			</div>
		);
	}
}

export default App;
