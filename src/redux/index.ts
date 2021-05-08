import { createStore, combineReducers, applyMiddleware } from 'redux';
import { goods } from './goods';
import { addGoodAsync } from './goods/sagas';

import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
	goods,
});

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(addGoodAsync);

export { store };
