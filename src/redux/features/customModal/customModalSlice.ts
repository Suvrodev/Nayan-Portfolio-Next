import { createSlice } from "@reduxjs/toolkit";

export interface CustomModalState {
  isOpenModal: boolean;
}

const initialState: CustomModalState = {
  isOpenModal: false,
};

export const custoModalSlice = createSlice({
  name: "customModal",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpenModal = true;
    },
    setCloseModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenModal, setCloseModal } = custoModalSlice.actions;

export default custoModalSlice.reducer;
