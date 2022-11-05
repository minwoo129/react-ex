import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { authSaga } from '../actions/auth';
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
