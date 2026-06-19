import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
);
