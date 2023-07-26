import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sort: 'all',
  },
  reducers: {
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSortType } = sortSlice.actions;
export default sortSlice.reducer;
