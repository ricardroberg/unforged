import { ThemeProvider } from "styled-components";

import { CyclesContextProvider } from "./contexts/CyclesContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <div>Unforged</div>
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
