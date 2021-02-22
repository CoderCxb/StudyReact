import Home from './../Home/Home';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
	componentDidMount(){

		axios.get('http://localhost:3000/core/test').then(data=>{
			console.log(data);
		})
		axios.get('http://localhost:3000/chat/test').then(data=>{
			console.log(data);
		})
	}
	render() {
		return (
			<div className="App">
				<Home src=""></Home>
			</div>
		);
	}
}

export default App;
