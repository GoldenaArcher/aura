export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CLEAR_TEXT = 'CLEAR_TEXT';

// LOGIN logic
export interface errorPayload {
  errorText: string;
}

export interface ChangeTextAction {
  type: typeof CHANGE_TEXT;
  payload: errorPayload;
}

export interface ClearTextAction {
  type: typeof CLEAR_TEXT;
}

// export interface LoginFailAction {
//   type: typeof LOGIN_FAIL;
//   message: string;
// }

export const changeText = (payload: string) => ({
  type: CHANGE_TEXT,
  payload,
});

export const clearText = (): ClearTextAction => ({
  type: CLEAR_TEXT,
});

export type ErrorType = ChangeTextAction | ClearTextAction;

// store.dispatch({
//   type: 'CHANGE_TEXT'
// })
