import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Import contexts
import { EditOpenProvider } from "./context/editOpen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EditOpenProvider>
    <App />
  </EditOpenProvider>
);
