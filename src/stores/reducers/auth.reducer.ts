import {
  AuthUnionType,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './../actions/auth.action';
export interface AuthState {
  login: {
    success: boolean;
    message: string;
  };
}

const initialState: AuthState = {
  login: {
    success: false,
    message: '',
  },
};

export default function authReducer(
  state = initialState,
  action: AuthUnionType
) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: {
          success: false,
          messate: '',
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          success: true,
          messate: '',
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          success: false,
          message: '',
        },
      };
    default:
      return state;
  }
}
