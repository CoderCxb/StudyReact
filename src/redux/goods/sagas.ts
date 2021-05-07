import { takeEvery, put, call, take } from 'redux-saga/effects';
import { addGoodAction, deteleGoodAction } from './action';

function* addGoodAsync() {
	let p = Promise.resolve({
		name: 'Mac Book Pro',
		id: 10086,
	});
	let t = yield take(addGoodAction);
	yield call(t);
}
