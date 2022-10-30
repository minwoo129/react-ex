import { createReducer } from 'typesafe-actions';
import { SAMPLE_ACTION } from '../actionTypes/auth';
import { AuthInitialState } from '../initialStates/initialStates';
import { AuthActionTypes, AuthInitialStateType } from '../type';

export default createReducer<AuthInitialStateType, AuthActionTypes>(
  AuthInitialState,
  {
    [SAMPLE_ACTION]: (state, { payload }) => {
      const { count } = payload;
      const newState: AuthInitialStateType = {
        ...state,
        count,
      };
      return newState;
    },
  },
);
