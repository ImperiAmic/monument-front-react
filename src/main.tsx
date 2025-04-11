import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter.tsx";
import MonumentsContextProvider from "./monument/context/MonumentsContextProvider.tsx";
import "@fontsource-variable/roboto/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MonumentsContextProvider>
        <AppRouter />
      </MonumentsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
