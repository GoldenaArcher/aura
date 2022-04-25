import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './reducers';
import logger from 'redux-logger';

const store = configureStore({
  reducer: createRootReducer(),
  middleware: [logger],
  devTools: true,
});

export default store;
