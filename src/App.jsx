import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";

const theme = {
  colors: {
    primary: "#2D3436",
    secondary: "#00A8CC",
    background: "#FFFFFF",
    text: "#2D3436",
    lightText: "#636E72",
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
