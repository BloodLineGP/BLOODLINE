import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {};

export const todoSlice = createSlice({
  // nama yang digunakan untuk debugging
  name: "todo",
  // state yang dibuat awal oleh redux
  initialState,
  // redux toolkit akan membuatkan action + reducer secara otomatis sehingga kita ibaratnya bisa mutating (karena pake Immer library yang sebenernya kita tidak mutate) state yang harusnya sifatnya immutable
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
    },
    fetchSuccess: async (state) => {
      const { data } = await axios.get();
      state.todo = data;
      state.loading = false;
    },
  },
});

export const { fetchPending, fetchSuccess } = todoSlice.actions;

export default todoSlice.reducer;
