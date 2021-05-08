import { Action } from 'redux';
import {
	takeEvery,
	put,
	call,
	take,
	fork,
	apply,
	takeLatest,
} from 'redux-saga/effects';
import { addGoodAction, deteleGoodAction } from './action';
import { GoodActionType, GoodActionTypes, GoodType } from './actionType';

function* test() {}
function* watchAddGood(action: Action<GoodActionType>) {
	try {
		// 模拟从后端获取数据
		let p = Promise.resolve({
			name: 'Mac Book Pro',
			id: 10086,
		});
		let good = yield p;
		// call 用来执行异步
		// apply 和call一样 用于执行异步,第一个参数 context(指定this) 第二个参数fn 第三个参数args为数组
		const id1 = yield apply(
			null,
			async function (id) {
				console.log('apply执行异步函数');
				return id;
			},
			[111]
		);

		// fork和call类似 用于执行异步代码 但是 和call和apply不同的是 他并不会阻塞
		// fork返回的是一个Task对象 result()获取结果 cencel()取消 具体看文档
		const id2 = yield fork(function* () {
			yield console.log('fork执行异步函数');
			return 111;
		});
		console.log(id1, id2.result());
		// put用于触发action 类似于dispatch
		yield put({ type: GoodActionTypes.ADD_GOOD, good });
	} catch (e) {
		console.log(e);
	}
}

export function* addGoodAsync() {
	// takeLatest()
	// takeLatest 监听最新触发的指定action 如果已经在触发 则会被取消

	// take(action) 将程序挂起 直至指定的action被dispatch 否则不会执行后面的代码
	// yield take(GoodActionTypes.CLEAR_GOOD);
	// console.log('take指定的action被dispatch');

	// fork(action)

	// takeEvery 监听指定的action
	yield takeEvery(GoodActionTypes.GET_GOOD, watchAddGood);
}
