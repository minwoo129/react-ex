import { applyMiddleware, createStore } from 'redux';
import reducer from '../modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const configure = () => {
  return createStore(reducer, applyMiddleware(createLogger()));
};

export default configure;
