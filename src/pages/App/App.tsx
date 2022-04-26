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
import loadBizChars from './test';
function X(){
	return <div>xxxx</div>
}

function App(){
	const data = [
		{
			month: "Jan",
			city: "Tokyo",
			temperature: 7
		},
		{
			month: "Jan",
			city: "London",
			temperature: 3.9
		},
		{
			month: "Feb",
			city: "Tokyo",
			temperature: 13
		},
		{
			month: "Feb",
			city: "London",
			temperature: 4.2
		},
		{
			month: "Mar",
			city: "Tokyo",
			temperature: 16.5
		},
		{
			month: "Mar",
			city: "London",
			temperature: 5.7
		},
		{
			month: "Apr",
			city: "Tokyo",
			temperature: 14.5
		},
		{
			month: "Apr",
			city: "London",
			temperature: 8.5
		},
		{
			month: "May",
			city: "Tokyo",
			temperature: 10
		},
		{
			month: "May",
			city: "London",
			temperature: 11.9
		},
		{
			month: "Jun",
			city: "Tokyo",
			temperature: 7.5
		},
		{
			month: "Jun",
			city: "London",
			temperature: 15.2
		},
		{
			month: "Jul",
			city: "Tokyo",
			temperature: 9.2
		},
		{
			month: "Jul",
			city: "London",
			temperature: 17
		},
		{
			month: "Aug",
			city: "Tokyo",
			temperature: 14.5
		},
		{
			month: "Aug",
			city: "London",
			temperature: 16.6
		},
		{
			month: "Sep",
			city: "Tokyo",
			temperature: 9.3
		},
		{
			month: "Sep",
			city: "London",
			temperature: 14.2
		},
		{
			month: "Oct",
			city: "Tokyo",
			temperature: 8.3
		},
		{
			month: "Oct",
			city: "London",
			temperature: 10.3
		},
		{
			month: "Nov",
			city: "Tokyo",
			temperature: 8.9
		},
		{
			month: "Nov",
			city: "London",
			temperature: 5.6
		},
		{
			month: "Dec",
			city: "Tokyo",
			temperature: 5.6
		},
		{
			month: "Dec",
			city: "London",
			temperature: 9.8
		}
	];
	let [ Chart, setChart ] = useState<any>('')
	let [ LineAdvance, setLineAdvance ] = useState<any>('')
	document.onload = async () => {
		await loadBizChars();
		const { Chart = X, LineAdvance = X } = (window as any).BizCharts;
		console.log(Chart);
		setChart(Chart);
		setLineAdvance(LineAdvance)
	}
	
	return <div>
		xxx
		{Chart && <Chart
      padding="auto"
      autoFit
      height={500}
      data={data}
    >
      <LineAdvance position="100" />
    </Chart>}
	</div>
}

// const history = createBrowserHistory();

// class App extends Component {
// 	// st = themes.dark;
// 	state = {
// 		theme: themes.dark,
// 		toggleTheme: () => {
// 			this.setState({
// 				theme: this.state.theme === themes.dark ? themes.light :themes.dark
// 			})
// 		},
// 		count: 0
// 	}
// 	static getDerivedStateFromError(error: Error) {
// 		console.log(error);
// 		// 更新 state 使下一次渲染能够显示降级后的 UI
// 		// return { hasError: true };
// 	}
// 	componentDidCatch(error: Error, errorInfo: any) {
// 		// 你同样可以将错误日志上报给服务器
// 		console.log(error, errorInfo);
// 	}
// 	goLifeCycle = () => {
// 		history.push('/life-cycle');
// 	};
// 	lf: any;
// 	componentDidMount() {
// 		console.log(this.lf);
// 	}
// 	add(){
// 		this.setState({
// 			count: this.state.count + 1
// 		})
// 	}
// 	render() {
// 		return (
// 			<div className="App">{this.state.count}
// 				{/* context的使用 */}
// 				<ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.state.toggleTheme}}>
// 					{/* Context的用法一 */}
// 					<ThemeContext.Consumer>
// 						{(value) => <UseContext {...value}></UseContext>}
// 					</ThemeContext.Consumer>
// 					{/* <UseContext></UseContext> */}
// 				</ThemeContext.Provider>
// 				{/* 路由的使用 */}
// 				<Router history={history}>
// 					<Link to="/life-cycle">生命周期</Link>
// 					<Link to="/http-request">网络请求</Link>
// 					<Link to="/use-redux">使用redux</Link>
// 					<Link to="/use-hooks">使用hooks</Link>
// 					<Route
// 						path="/life-cycle"
// 						ref={(lf) => (this.lf = lf)}
// 						component={LifeCycle}
// 					></Route>
// 					<Route path="/http-request" component={HttpRequest}></Route>
// 					<Route path="/use-hooks" component={UseHooks}></Route>
// 					{/* <Route path="/use-redux" component={UseRedux}></Route> */}

// 					{/* <Redirect to="/xxx"></Redirect> */}
// 				</Router>
// 				{/*  */}
// 				<Provider store={store}>
// 					<UseRedux />
// 				</Provider>
// 				<UseAntd></UseAntd>
// 				<Base></Base>
// 				<RenderProps></RenderProps>
// 			</div>
// 		);
// 	}
// }

export default App;
