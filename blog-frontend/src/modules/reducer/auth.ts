import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { AuthActionTypes } from '../actions';
import { changeFieldType } from '../actions/auth';
import { CHANGE_FIELD, INITIALIZE_FORM } from '../actionTypes/auth';
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
  },
);
