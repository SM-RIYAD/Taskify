import React from "react";
import ReactDOM from "react-dom/client";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { TouchBackend } from 'react-dnd-touch-backend'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <DndProvider  backend={HTML5Backend} >
        <RouterProvider router={router}></RouterProvider>{" "}
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>
);
