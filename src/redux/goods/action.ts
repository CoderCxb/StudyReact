import { GoodActionTypes, GoodType } from './actionType';
function addGoodAction(good: GoodType) {
  return {
    type: GoodActionTypes.ADD_GOOD,
    good
  }
}

function deteleGoodAction(id: number) {
  return {
    type: GoodActionTypes.DELETE_GOOD,
    id
  }
}

export { addGoodAction, deteleGoodAction }