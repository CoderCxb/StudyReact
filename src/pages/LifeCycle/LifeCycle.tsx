import React, { Component, ComponentProps } from 'react';
import { RouteComponentProps, RouteProps, RouterProps } from 'react-router';
interface LifeCycleState {
	name: string;
}

interface LifeCycleProps {
	title: string;
}

type Props = Partial<LifeCycleProps & RouteComponentProps>;

class LifeCycle extends Component<Props> {
	state: LifeCycleState = { name: 'marco' };

	constructor(props: Props) {
		super(props);
		// 构造函数主要用于初始化state和为方法绑定this执行 如果不需要 可以不用写构造函数 并且不要调用setState方法 构造函数可以直接初始化state
		console.log('构造函数');
	}

	static getDerivedStateFromProps(props: any, state: any) {
		console.log('getDerivedStateFromProps执行');
		return null;
	}

	// componentDidMount会在组件挂载后(插入DOM中)后立即调用。
	componentDidMount() {
		console.log('componentDidMount执行');
	}

	// 更新前获取快照
	getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
		return {};
	}

	// 首次渲染或使用 forceUpdate() 时不会调用本方法
	shouldComponentUpdate(nextProps: any, nextState: any) {
		console.log('shouldComponentUpdate执行', nextProps, nextState);
		// 根据返回true和false 判断是否调用render() componentDidUpdate()
		return true;
	}

	// 更新后立即执行 首次渲染不会执行
	componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
		// 第一个参数：前一个props 第二个参数 上一个state
		// 如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。
		console.log('componentDidUpdate执行', prevProps, prevState, snapshot);
	}
	componentWillUnmount() {
		console.log('componentWillUnmount执行');
	}
	componentDidCatch(error: Error, info: Object) {
		console.log('componentDidCatch执行', error, info);
	}
	static getDerivedStateFromError(error: Error) {
		console.log('getDerivedStateFromError', error);
		return null;
	}
	// 必须实现的方法render() 并且是个纯函数
	render() {
		console.log('LifeCycle--render');
		return (
			<div>
				<h4>演示生命周期函数</h4>
				{this.state.name}
				<button onClick={this.changeName}>修改state</button>
			</div>
		);
	}

	static defaultProps: LifeCycleProps = {
		title: '标题',
	};

	// 自定义方法
	changeName = () => {
		// 1. setState方法不是立即执行
		// 2. 由于setState不是立即执行 因此设置完直接使用 无法获取最新的state
		// 3. 建议在componentDidUpdate中
		// 4. 建议setState接收的第一个参数为函数
		this.setState((state) => {
			return { name: 'polo' };
		});
		// 获取组件间的子组件 <Parent>子组件</Parent>
		console.log(this.props);

		// 强制刷新页面 会跳过shouldComponentUpdate方法 但是子组件生命周期正常
		// this.forceUpdate();
	};

	// 过时的生命周期方法

	// UNSAFE_componentWillMount() {}
	// UNSAFE_componentWillReceiveProps(nextProps: any) {}
	// UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {}
}
export default LifeCycle;
