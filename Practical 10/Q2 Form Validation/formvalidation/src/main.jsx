import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FormValidationApp from "./FormValidation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormValidationApp />
  </StrictMode>
);
