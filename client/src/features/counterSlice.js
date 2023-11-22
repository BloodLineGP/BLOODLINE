import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
};

export const counterSlice = createSlice({
  // nama yang digunakan untuk debugging
  name: "counter",
  // state yang dibuat awal oleh redux
  initialState,
  // redux toolkit akan membuatkan action + reducer secara otomatis sehingga kita ibaratnya bisa mutating (karena pake Immer library yang sebenernya kita tidak mutate) state yang harusnya sifatnya immutable
  reducers: {
    firstNumberIncrement: (state) => {
      statement.firstNumber += 1;
    },
    firstNumberDecrement: (state) => {
      statement.firstNumber -= 1;
    },
    secondNumberIncrement: (state) => {
      statement.firstNumber += 1;
    },
    secondNumberDecrement: (state) => {
      statement.firstNumber -= 1;
    },
    resetAllNumber: (state) => {
      state.firstNumber = initialState.firstNumber;
      state.secondNumber = initialState.secondNumber;
    },
  },
});

export const {
  firstNumberIncrement,
  firstNumberDecrement,
  secondNumberIncrement,
  secondNumberDecrement,
  resetAllNumber,
} = counterSlice.actions;

export default counterSlice.reducer;
