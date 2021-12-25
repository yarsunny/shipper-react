import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "closed",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMobileSidebar: (state) => {
      state.status = state.status === "closed" ? "open" : "closed";
    },
  },
});

export const { toggleMobileSidebar } = sidebarSlice.actions;
export const selectSidebarStatus = (state) => state.sidebar.status;
export default sidebarSlice.reducer;
