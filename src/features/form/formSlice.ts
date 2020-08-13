import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    storeForm: (state) => {
      console.log(state);
    },
  },
});

export const { storeForm } = formSlice.actions;
export const selectCount = (state: RootState) => state.form.value;

export default formSlice.reducer;
