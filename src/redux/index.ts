import { createStore, combineReducers } from 'redux';
import { goods } from './goods';

const reducers = combineReducers({
  goods,
})

const store = createStore(reducers)


export { store };