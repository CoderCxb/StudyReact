import React, {
	createRef,
	forwardRef,
	MutableRefObject,
	useContext,
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { MyContext } from '../context';

export default function UseHooks() {
	// useState 用于添加内部state 返回值是数组[state值,设置state函数] 可接受泛型
	const [count, setCount] = useState<number>(0);
	const [books, setBooks] = useState<string[]>([]);
	// 使用
	function addBook() {
		setBooks((preState) => {
			return [...preState, inputBook.current.value];
		});
	}
	// useRef 用于获取页面DOM元素
	const inputBook: MutableRefObject<HTMLInputElement> = useRef(null as any);

	// useLayoutEffect 与useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
	// 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
	useLayoutEffect(() => {
		console.log('useLayoutEffect监听count++:', count);
		
	});

	// 类似于计算属性 当第二个参数的依赖发生改变时 触发更新 否则使用缓存
	let cacheData=useMemo(()=>{
		console.log(count,books);
		return `${count} ${books.join('-')}`
	},[])
	
	// useEffect 用于监听某个state的改变,并且是延迟执行
	// useEffect 可以当作三个周期函数
	// 1. componentDidUpdate 即不接受参数时
	// 2. componentDidMounted 第二个参数接收一个[] 
	// 3. componentWillUnmount useEffect返回一个函数时 该函数在组件卸载时执行
	useEffect(() => {
		console.log('useEffect监听count++:', count);
		return ()=>{
			console.log("XXX");
		}
	},[count]);
	useEffect(()=>{
		console.log('effect2执行');
	},[])



	const uContext = useContext(MyContext);
	function update() {  
		uContext.frame = 'vue';
	}
	let ul=createRef<any>();
	// console.log(ul);

	// useImperativeHandle配合useRef/createRef 以及forwardRef
	// 使得父元素可以获取到函数组件上的方法
	const HookSonComponent=forwardRef(HookSon);
	let hs=useRef();
	useEffect(()=>{
		console.log(hs);
	},[])
	
	
	return (
		<div>
			<HookSonComponent ref={hs} count={count}></HookSonComponent>
			<div>
				<button onClick={() => {setCount(count + 1);}}>＋</button>
			</div>
			<div>当前计数:{count}</div>

			<p>useMemo--类似于计算属性:{cacheData}</p>
		
			<ul ref={ul}>
				{books.map((book) => (
					<li key={book}>{book}</li>
				))}
			</ul>
			<input type="text" ref={inputBook} />
			<button onClick={addBook}>添加书籍</button>
			<div>
				{ uContext.info.why + ' ' +
					uContext.frame +' ' +
					uContext.info.version.toFixed(1)
				}
			</div>
			<button onClick={update}>升级</button>
		</div>
	);
}


// 子组件接收第二个参数 ref 接收 forwardRef传递的ref
function HookSon(props:any,ref:any){
	console.log(props,ref);
	
	let inputRef = useRef<any>();
	
	// useImperativeHandle 暴露指定的方法和数据给ref
  useImperativeHandle(ref, () => ({
		str:'HS',
    focus: () => {
      inputRef.current.focus();
    }
  }));
	return <button ref={inputRef}>HookSon's Button</button>
}