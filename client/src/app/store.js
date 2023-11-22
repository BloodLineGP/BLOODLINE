import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterSlice";
import todos from "../features/todoSlice";

export default configureStore({
  reducer: {
    counter,
  },
});
