import { createSlice } from "@reduxjs/toolkit";

export interface DrawerState {
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawer: (state, action) => {
      //   console.log("Payload: ", action.payload);
      state.isOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
