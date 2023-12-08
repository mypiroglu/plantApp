import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getData} from '../../api';

interface DataSliceState {
  data: any;
  isLoading: boolean;
  message: string | undefined;
  error: boolean | undefined;
}

const initialState: DataSliceState = {
  data: undefined,
  isLoading: false,
  message: undefined,
  error: undefined,
};

const getDataSlice = createSlice({
  name: 'getDataSlice',
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
      .addCase(getData.pending, state => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getData.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = getDataSlice.actions;
export default getDataSlice.reducer;
