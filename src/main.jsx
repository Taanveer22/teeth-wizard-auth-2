import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={PublicRouter}
        hydrateFallbackElement={<div>Loading...</div>}
      ></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
