import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

// Handle GitHub Pages SPA redirect
const redirect = sessionStorage.getItem("gh-pages-redirect");
if (redirect) {
  sessionStorage.removeItem("gh-pages-redirect");
  // Navigate after router is ready
  router.navigate({ to: redirect, replace: true });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
