import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import DocumentSelector from "./components/DocumentSelector";
import theme from "./theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="min-h-[100dvh] min-w-[100dvw] bg-background">
          <DocumentSelector />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
