import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./base.css";

const rootElement = document.getElementById("root");
const hasServerMarkup = rootElement && rootElement.firstElementChild !== null;

if (hasServerMarkup && typeof ReactDOM.hydrateRoot === "function") {
  ReactDOM.hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
