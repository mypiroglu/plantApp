import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {categoriesSlice, questionsSlice} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
  questions: questionsSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
