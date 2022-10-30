import { SAMPLE_ACTION } from '../actionTypes/auth';

export const sampleAction = (value: any) => {
  return { type: SAMPLE_ACTION, payload: value };
};
