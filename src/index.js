import React from "react";
import { createRoot } from "react-dom/client";
import JournalApp from "./JournalApp";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
);
