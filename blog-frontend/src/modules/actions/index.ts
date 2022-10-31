import { ActionType } from 'typesafe-actions';
import { changeField, initializeForm } from './auth';

export type AuthActionTypes =
  | ActionType<typeof changeField>
  | ActionType<typeof initializeForm>;
