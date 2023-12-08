import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getQuestions} from '../../api';

interface QuestionsSliceState {
  data: any;
  isLoading: boolean;
  message: string | undefined;
  error: boolean | undefined;
}

const initialState: QuestionsSliceState = {
  data: undefined,
  isLoading: false,
  message: undefined,
  error: undefined,
};

const getQuestionsSlice = createSlice({
  name: 'getQuestionsSlice',
  initialState,
  reducers: {
    reset: state => {
      state.data = undefined;
      state.isLoading = false;
      state.message = undefined;
      state.error = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getQuestions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getQuestions.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = getQuestionsSlice.actions;
export default getQuestionsSlice.reducer;
