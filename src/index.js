import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer position="top-center" />
    <AuthProvider>
      <App />
    </AuthProvider>
  </>
);
