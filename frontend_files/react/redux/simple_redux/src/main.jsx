import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { reduxStore } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     {/** 3.Step wrap the  <App /> with ReDux provider and pass the store */}
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
