import { AuthInitialStateType } from './InitialStateType';

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
};
