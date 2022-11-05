import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { AuthActionTypes } from '../actions';
import { changeFieldType } from '../actions/auth';
import { CHANGE_FIELD, INITIALIZE_FORM, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from '../actionTypes/auth';
import { AuthInitialState as initialStates } from '../initialStates/initialStates';
import { AuthInitialStateType } from '../initialStates/InitialStateType';

export default createReducer<AuthInitialStateType, AuthActionTypes>(
  initialStates,
  {
    [CHANGE_FIELD]: (state, { payload }) => {
      const { form, key, value } = payload as changeFieldType;

      return produce(state, (draft: any) => {
        draft[form][key] = value;
      });
    },
    [INITIALIZE_FORM]: (state, { payload }) => {
      const newState = {
        ...state,
        [(payload as any).form]: (initialStates as any)[(payload as any).form],
      };

      return newState;
    },

    [REGISTER]: (state, action) => {
      return state;
    },
    [REGISTER_SUCCESS]: (state, {payload: auth}) => {
      const newState:AuthInitialStateType = {
        ...state,
        authError: null,
        auth
      }

      return newState;
    },
    [REGISTER_ERROR]: (state, {payload: error}) => {
      const newState:AuthInitialStateType = {
        ...state,
        authError: error
      }
      return newState;
    },
    
    [LOGIN]: (state, action) => {
      return state;
    },
    [LOGIN_SUCCESS]: (state, {payload: auth}) => {
      const newState:AuthInitialStateType = {
        ...state,
        authError: null,
        auth
      }

      return newState;
    },
    [LOGIN_ERROR]: (state, {payload: error}) => {
      const newState:AuthInitialStateType = {
        ...state,
        authError: error
      }
      return newState;
    },
  },
);
