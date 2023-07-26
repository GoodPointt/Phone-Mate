import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
