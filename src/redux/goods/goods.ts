import { createStore } from 'redux';
import { Good, GoodActionType, GoodAction } from "./types";

let initState: Array<Good> = [];
function goods(state = initState, action: GoodAction) {
  switch (action.type) {
    case GoodActionType.ADD:
      state.push(action.data);
      console.log(state);

      return state;
    case GoodActionType.DELETE:
      state = state.filter((item: Good) => item.id !== action.deleteId)
      return state;
    default:
      return state;
  }
}

let store = createStore(goods);

export default store;