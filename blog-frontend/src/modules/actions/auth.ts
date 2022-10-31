import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  SAMPLE_ACTION,
} from '../actionTypes/auth';

export type changeFieldType = {
  form: 'register' | 'login';
  key: 'username' | 'password' | 'passwordConfirm';
  value: string;
};

export const changeField = (props: changeFieldType) => {
  return { type: CHANGE_FIELD, payload: props };
};

export const initializeForm = (form: 'register' | 'login') => {
  return { type: INITIALIZE_FORM, payload: form };
};
