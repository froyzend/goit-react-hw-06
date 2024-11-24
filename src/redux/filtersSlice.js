import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    /*Редьюсер для изменения имени фильтра*/
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
/* Экспортируем экшены для изменения фильтра name*/
export const { changeFilter } = filtersSlice.actions;

/*Экспортируем редюсер слайса*/
export default filtersSlice.reducer;
