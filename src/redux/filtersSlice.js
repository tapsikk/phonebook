import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilterName = (state) => state.filters.name;

export const { setNameFilter } = filtersSlice.actions;

export default filtersSlice;