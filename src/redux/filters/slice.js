import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// eкшен для використання в dispatch
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export default filtersSlice.reducer;
