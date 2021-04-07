import React, { useState } from 'react';

export default function Base() {
	// let list: Date[] = [];
	const [list, setList] = useState<Date[]>([]);
	const addDate = () => {
		setList([...list, new Date()]);
	};
	return (
		<div>
			<button onClick={addDate}>添加最新日期</button>
			<ul>
				{list.map((date) => (
					<li key={date.toISOString()}>{date.toString()}</li>
				))}
			</ul>
		</div>
	);
}
