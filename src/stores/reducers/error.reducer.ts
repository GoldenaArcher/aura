import { ErrorType, CHANGE_TEXT, CLEAR_TEXT } from './../actions/error.action';

export interface ErrorState {
  errorText: string;
}

const initialState: ErrorState = {
  errorText: 'Error',
};

export default function errorReducer(state = initialState, action: ErrorType) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        errorText: action.payload,
      };
    //     };
    case CLEAR_TEXT:
      return {
        ...state,
        errorText: '',
      };
    default:
      return state;
  }
}
