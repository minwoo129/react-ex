import { applyMiddleware, createStore } from 'redux';
import reducer from '../modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
const configure = () => {
  return createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));
};

export default configure;
