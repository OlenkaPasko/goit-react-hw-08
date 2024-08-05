import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// eкшен для використання в dispatch
export const { changeFilter } = filtersSlice.actions;

// Функція-селектор для використання в useSelector
export const selectNameFilter = (state) => state.filters.name;

// Редюсер слайсу
export default filtersSlice.reducer;
