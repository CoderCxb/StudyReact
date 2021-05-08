import { addGoodAsync } from './sagas';

export { goods } from './reducer';

export { addGoodAction, deteleGoodAction } from './action';

export type { GoodActionType, GoodActionTypes, GoodType } from './actionType';

export function GoodRootSaga() {
	addGoodAsync();
}
