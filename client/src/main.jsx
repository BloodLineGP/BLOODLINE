import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="875756828514-tm522htv29n06au6vrrqrjsjo6jteva5.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
);
