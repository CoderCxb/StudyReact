import React, {
	MutableRefObject,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { context, contextContent } from '../context';

export default function UseHooks() {
	// useState 用于添加内部state 返回值是数组[state值,设置state函数] 可接受泛型
	const [count, setCount] = useState<number>(0);
	const [books, setBooks] = useState<string[]>([]);
	// useRef 用于获取页面DOM元素
	const inputBook: MutableRefObject<HTMLInputElement> = useRef(null as any);

	// useLayoutEffect 与useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
	// 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
	useLayoutEffect(() => {
		console.log('useLayoutEffect监听count++:', count);
		
	});
	
	// useEffect 用于监听某个state的改变,并且是延迟执行
	let xx=useEffect(() => {
		console.log('useEffect监听count++:', count);
		return ()=>{
			console.log("XXX");
		}
	});
	console.log(xx);
	function addBook() {
		// setBooks((preState) => {
		// 	return [...preState, inputBook.current.value];
		// });
		setBooks([...books, inputBook.current.value]);
	}
	const uContext = useContext(context);
	function update() {
		uContext.frame = 'vue';
	}
	return (
		<div>
			<div>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
				>
					＋
				</button>
			</div>
			<div>当前计数:{count}</div>

			<ul>
				{books.map((book) => (
					<li key={book}>{book}</li>
				))}
			</ul>
			<input type="text" ref={inputBook} />
			<button onClick={addBook}>添加书籍</button>
			<div>
				{uContext.info.why +
					' ' +
					uContext.frame +
					' ' +
					uContext.info.version.toFixed(1)}
			</div>
			<button onClick={update}>升级</button>
		</div>
	);
}
