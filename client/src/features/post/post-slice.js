import { createSlice } from "@reduxjs/toolkit";
import { url } from "../../configs/config";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchReject } = postSlice.actions;
export const fetchPost = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/posts`, {
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
export default postSlice.reducer;
