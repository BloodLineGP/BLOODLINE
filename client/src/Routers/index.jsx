import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import MainPage from "../views/MainPage";
import MainContent from "../views/MainContent";
import DetailedPostPage from "../views/DetailedPostPage";
import RegistrationPage from "../views/RegistrationPage";
import LoginPage from "../views/LoginPage";
import CreatePost from "../views/CreatePost";

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
    ],
  },
]);

export default router;
