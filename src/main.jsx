import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { TodoContext } from "./context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <TodoContext>
      <App />
    </TodoContext>
  </ThemeContext>,
);
