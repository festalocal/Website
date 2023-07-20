// Importing React modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// React components imports and Styles
import App from "./App.tsx";
// Importing tailwind rules
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode> lets you find common bugs in your components early during development.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
