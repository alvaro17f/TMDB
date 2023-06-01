import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./Providers/UserProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
