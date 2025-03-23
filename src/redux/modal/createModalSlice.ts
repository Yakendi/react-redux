import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  content: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;