import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './auth.reducer';
import errorReducer, { ErrorState } from './error.reducer';

export interface AppState {
  auth: AuthState;
  error: ErrorState;
}

const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    error: errorReducer,
  });

export default createRootReducer;
