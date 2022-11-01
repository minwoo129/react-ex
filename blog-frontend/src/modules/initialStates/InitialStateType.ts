export type AuthInitialStateType = {
  count: number;
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
};

export type LoadingInitialStateType = {
  [key in string]: boolean
}
