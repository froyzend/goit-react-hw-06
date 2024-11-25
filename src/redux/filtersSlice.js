import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; /* Обновляем имя фильтра*/
    },
  },
});

/* Экспортируем действия для изменения фильтра */
export const { changeFilter } = filtersSlice.actions;

/* Экспортируем редюсер фильтров */
export default filtersSlice.reducer;
