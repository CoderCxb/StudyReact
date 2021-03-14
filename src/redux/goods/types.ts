export interface Good {
  id: number;
  name: string;
  type: string;
}

export enum GoodActionType {
  ADD,
  DELETE,
}

export interface GoodAction {
  type: GoodActionType;
  deleteId?: number;
  data?: any;
}

