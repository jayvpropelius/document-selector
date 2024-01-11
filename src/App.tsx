import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import DocumentSelector from "./components/DocumentSelector";
import theme from "./theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DocumentSelector />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
