import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import {} from './slice';

const reducer = combineReducers({});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
