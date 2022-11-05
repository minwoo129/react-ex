import { AuthInitialStateType, LoadingInitialStateType } from './InitialStateType';

export const AuthInitialState: AuthInitialStateType = {
  count: 0,
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null

};

export const LoadingInitialState: LoadingInitialStateType = {
  
}
