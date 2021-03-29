export enum GoodActionTypes {
  ADD_GOOD = "AddGood",
  DELETE_GOOD = "DeleteGood"
}

export type GoodType = {
  id: number;
  name: string;
}

export type GoodActionType = {
  type: GoodActionTypes,
  good?: GoodType,
  id?: number
}


