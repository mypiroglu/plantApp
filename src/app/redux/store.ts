import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {categoriesSlice, questionsSlice} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
  questions: questionsSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
