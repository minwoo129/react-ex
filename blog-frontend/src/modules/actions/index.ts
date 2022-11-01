import { ActionType } from 'typesafe-actions';
import { changeField, initializeForm } from './auth';
import { finishLoading, startLoading } from './loading';

export type AuthActionTypes =
  | ActionType<typeof changeField>
  | ActionType<typeof initializeForm>;

export type LoadingActionTypes = ActionType<typeof startLoading> | ActionType<typeof finishLoading>;
