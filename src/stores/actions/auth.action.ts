export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// LOGIN logic
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: LoginPayload;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  message: string;
}

export const login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
});

export type AuthUnionType = LoginAction | LoginSuccessAction | LoginFailAction;
