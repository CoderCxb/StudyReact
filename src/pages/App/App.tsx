import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { themes, ThemeContext } from './themes';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LifeCycle from '../LifeCycle/LifeCycle';
import HttpRequest from '../HttpRequest/HttpRequest';
import { Provider } from 'react-redux';
import UseHooks from '../UseHooks/UseHooks';
import UseRedux from '../UseRedux/UseRedux';
import { store } from '../../redux';
import Base from '../Base/Base';
import UseContext from '../UseContext/UseContext';
import UseAntd from '../UseAntd/UseAntd';
import RenderProps from '../RenderProps/RenderProps';


const history = createBrowserHistory();

class App extends Component {
	// st = themes.dark;
	state = {
		theme: themes.dark,
		toggleTheme: () => {
			this.setState({
				theme: this.state.theme === themes.dark ? themes.light :themes.dark
			})
		},
		count: 0
	}
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
	add(){
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<div className="App">{this.state.count}
				{/* context的使用 */}
				<ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
					{/* Context的用法一 */}
					<ThemeContext.Consumer>
						{(value) => <UseContext {...value}></UseContext>}
					</ThemeContext.Consumer>
					{/* <UseContext></UseContext> */}
				</ThemeContext.Provider>
				{/* 路由的使用 */}
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
				{/*  */}
				<Provider store={store}>
					<UseRedux />
				</Provider>
				<UseAntd></UseAntd>
				<Base></Base>
				<RenderProps></RenderProps>
			</div>
		);
	}
}

export default App;
