import { Container, CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


function App() {
  const[darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
const theme = createTheme({
  palette:{
    mode:paletteType,
    background:{
      default: paletteType === 'light' ? '#eaeaea' : '#121212'
    }
  }
})

function handleThemeChange(){
  setDarkMode(!darkMode)
}
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth="lg">
      <Catalog />    
      </Container> 
    </ThemeProvider>
  );
}

export default App;
