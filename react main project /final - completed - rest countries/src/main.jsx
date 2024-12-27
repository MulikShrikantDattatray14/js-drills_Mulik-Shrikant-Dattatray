import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from 'react';
import { DarkModeProvider } from "./context.jsx";
import MainComponent from "./maincomponent.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
     
      <MainComponent />
    </DarkModeProvider>
  </StrictMode>
);


