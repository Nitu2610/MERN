import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextAPIProvider } from "./contextAPI/UserContextAPI.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <UserContextAPIProvider>
          <App />
        </UserContextAPIProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
