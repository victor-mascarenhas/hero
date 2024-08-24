import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CharacterProvider } from "./state/provider.tsx";
import GlobalStyle, { theme } from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharacterProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </CharacterProvider>
  </StrictMode>
);
