export enum GoodActionTypes {
	ADD_GOOD = 'AddGood',
	DELETE_GOOD = 'DeleteGood',
	GET_GOOD = 'GetGood',
	GET_GOOD_SUCCESS = 'GetGoodSuccess',
	GET_GOOD_FAIL = 'GetGoodFail',
	CLEAR_GOOD = 'ClearGood',
}

export type GoodType = {
	id: number;
	name: string;
};

export type GoodActionType = {
	type: GoodActionTypes;
	good?: GoodType;
	id?: number;
};
