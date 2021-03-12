import React from 'react';
import { Router, Route, Link, RouteComponentProps } from 'react-router-dom';
interface Props {
	title: string;
}
export default function ShowRouter(routeProps: Props) {
	console.log(routeProps);

	return (
		<div>
			<Link to="/show-router/son1">跳转1</Link>
			<Link to="/show-router/son2">跳转2</Link>

			<Route path="/show-router/son1" component={Son1}></Route>
			<Route path="/show-router/son2" component={Son2}></Route>
		</div>
	);
}

function Son1() {
	return <div>子组件1</div>;
}

function Son2() {
	return <div>子组件2</div>;
}
