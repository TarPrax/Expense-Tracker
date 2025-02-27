import ReactDOM from "react-dom/client";
import React from "react";
import App from "./ReactFiles/App.js";

import { appRouter } from "./ReactFiles/App.js";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
