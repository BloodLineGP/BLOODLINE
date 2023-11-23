import { createSlice } from "@reduxjs/toolkit";
import { url } from "../../configs/config";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  myposts: [],
  loading: false,
  error: "",
};

export const myPostSlice = createSlice({
  name: "myposts",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.myposts = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchReject } = myPostSlice.actions;
export const fetchMyPost = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/posts/mypost`, {
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
export default myPostSlice.reducer;
