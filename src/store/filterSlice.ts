import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action: PayloadAction<{ filter: string }>) {
      state.filter = action.payload.filter;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
