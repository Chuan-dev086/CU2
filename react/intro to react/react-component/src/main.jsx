import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import ShowCharacters from "./ShowCharacters.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShowCharacters />

  </StrictMode>,
);
