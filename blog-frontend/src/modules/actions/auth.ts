import { createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import invokeAPI from '../../lib/api/restApi';
import createRequestSaga from '../../lib/createRequestSaga';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  LOGIN,
  REGISTER,
  SAMPLE_ACTION,
} from '../actionTypes/auth';

// ================================================== action creator Type ==============================================
export type changeFieldType = {
  form: 'register' | 'login';
  key: string; // 'username' | 'password' | 'passwordConfirm'
  value: string;
};

export type loginRegisterType = {
  username: string,
  password: string
}

// ================================================== action creator ==============================================

export const changeField = (props: changeFieldType) => {
  return { type: CHANGE_FIELD, payload: props };
};

export const initializeForm = (form: 'register' | 'login') => {
  return { type: INITIALIZE_FORM, payload: form };
};

export const register = createAction(REGISTER, ({username, password}:loginRegisterType) => ({username, password}));

export const login = createAction(LOGIN, ({username, password}:loginRegisterType) => ({username, password}));

// ================================================== saga ==============================================
const registerSaga = createRequestSaga(REGISTER, invokeAPI({method: 'post', path: '/api/auth/register'}))

const loginSaga = createRequestSaga(LOGIN, invokeAPI({method: 'post', path: '/api/auth/login'}));

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN,loginSaga);
}
