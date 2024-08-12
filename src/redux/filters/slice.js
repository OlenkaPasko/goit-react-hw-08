import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
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
