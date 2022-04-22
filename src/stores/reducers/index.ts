import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './auth.reducer';

export interface AppState {
  auth: AuthState;
}

const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
  });

export default createRootReducer;
