import { ThemeProvider } from "styled-components";

import { CyclesContextProvider } from "./contexts/CyclesContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Home />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
