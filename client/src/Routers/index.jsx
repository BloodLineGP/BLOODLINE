import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import MainPage from "../views/MainPage";
import MainContent from "../views/MainContent";
import DetailedPostPage from "../views/DetailedPostPage";
import RegistrationPage from "../views/RegistrationPage";
import LoginPage from "../views/LoginPage";
import CreatePost from "../views/CreatePost";
import MyPostPage from "../views/MyPostPage";
import RequestPostPage from "../views/RequestPostPage";
import DonorPostPage from "../views/DonorPostPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <LoginPage />,
    loader: async () => {
      if (localStorage.authorization) {
        return redirect("/posts");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegistrationPage />,
    loader: async () => {
      if (localStorage.authorization) {
        return redirect("/posts");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: async () => {
      if (localStorage.authorization) {
        return redirect("/posts");
      }
      return null;
    },
  },
  {
    element: <MainPage />,
    loader: async () => {
      if (!localStorage.authorization) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/posts",
        element: <MainContent />,
      },
      {
        path: "/detailed/:id",
        element: <DetailedPostPage />,
      },
      {
        path: "/postform",
        element: <CreatePost />,
      },
      {
        path: "/posts/mypost",
        element: <MyPostPage />,
      },
      {
        path: "/posts/request",
        element: <RequestPostPage />,
      },
      {
        path: "/posts/donor",
        element: <DonorPostPage />,
      },
    ],
  },
]);

export default router;
