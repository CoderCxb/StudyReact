import React, { forwardRef, useEffect, useRef, useState } from 'react';

export default function Base() {
	// let list: Date[] = [];
	const [list, setList] = useState<Date[]>([]);
	const addDate = () => {
		setList([...list, new Date()]);
	};
	let iRef = useRef();
	useEffect(() => {
		console.log(iRef);
	});
	return (
		<div>
			<button onClick={addDate}>添加最新日期</button>
			<ul>
				{list.map((date) => (
					<li key={date.toISOString()}>{date.toString()}</li>
				))}
			</ul>
			<Test ref={iRef}></Test>
		</div>
	);
}

let Test = forwardRef(function (props: any, iRef: any) {
	return (
		<div>
			<input ref={iRef}></input>
		</div>
	);
});

// function Test(props: any, iRef: any) {
// 	// console.log(props, iRef);

// 	return (
// 		<div>
// 			<input ref={props.iRef}></input>
// 		</div>
// 	);
// }
