import { createSlice } from "@reduxjs/toolkit";
import { url } from "../../configs/config";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  donorposts: [],
  loading: false,
  error: "",
};

export const donorPostSlice = createSlice({
  name: "donorposts",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.donorposts = action.payload;
    },
    fetchReject(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchReject } =
  donorPostSlice.actions;
export const fetchDonorPost = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/posts/donor`, {
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
export default donorPostSlice.reducer;
