import { configureStore } from "@reduxjs/toolkit";
import posts from "../features/post/post-slice";
import myposts from "../features/post/myPost-slice";
import donorposts from "../features/post/donorPost-slice";
import requestposts from "../features/post/requestPost-slice";

export default configureStore({
  reducer: {
    posts,
    myposts,
    donorposts,
    requestposts,
  },
});
