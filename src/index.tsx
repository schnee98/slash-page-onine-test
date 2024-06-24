import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ElevatorInfoProvider } from "./context/ElevatorInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ElevatorInfoProvider>
      <App />
    </ElevatorInfoProvider>
  </React.StrictMode>
);
