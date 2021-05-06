import { GoodActionType, GoodActionTypes, GoodType } from './actionType';
const initState: Array<GoodType> = [];
function goods(state = initState, action: GoodActionType) {
  switch (action.type) {
    case GoodActionTypes.ADD_GOOD: {
      const newState = [...state, action.good as GoodType];
      return newState;
    }
    case GoodActionTypes.DELETE_GOOD: {
      const newState = state.filter(good => good?.id !== action?.id)
      return newState;
    }
    default:
      return state;
  }
}

export { goods };