import { ActionType } from 'typesafe-actions';
import { changeField, initializeForm, login, register } from './auth';
import { finishLoading, startLoading } from './loading';

type successActionType = {
  type: string,
  payload: any
}

type errorActionType = {
  type: string,
  payload: any,
  error: boolean
}

// ========================================== Auth =================================================
export type AuthActionTypes =
  | ActionType<typeof changeField>
  | ActionType<typeof initializeForm> | ActionType<typeof register> | ActionType<typeof login> | successActionType | errorActionType;

// ========================================== Loading =================================================

export type LoadingActionTypes = ActionType<typeof startLoading> | ActionType<typeof finishLoading>;
