import React from "react";
import ReactDOM from "react-dom/client";
import DemoPage from "./DemoPage";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <DemoPage />
  </React.StrictMode>
);
