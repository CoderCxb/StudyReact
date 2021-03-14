import { Good, GoodActionType } from '../../redux/goods/types';
import goods from './goods';
export function addGood(data: Good) {
  goods.dispatch({
    type: GoodActionType.ADD,
    data: data
  })
};

export function deleteGood(id: number) {
  goods.dispatch({
    type: GoodActionType.DELETE,
    deleteId: id
  })
}