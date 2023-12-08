import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});

export const getData = createAsyncThunk('getCategories', async () => {
  const res = await instance.get('getCategories');
  return res.data;
});

export const getQuestions = createAsyncThunk('getQuestions', async () => {
  const res = await instance.get('getQuestions');
  return res.data;
});
