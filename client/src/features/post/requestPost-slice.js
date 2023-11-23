import { createSlice } from "@reduxjs/toolkit";
import { url } from "../../configs/config";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  requestposts: [],
  loading: false,
  error: "",
};

export const requestPostSlice = createSlice({
  name: "requestposts",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.requestposts = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchReject } =
  requestPostSlice.actions;
export const fetchRequestPost = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/posts/request`, {
      headers: {
        Authorization: `Bearer ${localStorage.authorization}`,
      },
    });
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(fetchReject(error.message));
    Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
};
export default requestPostSlice.reducer;
