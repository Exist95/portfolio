import { ThemeProvider } from "styled-components";
import Header from "./components/global/Header";
import { media } from "./style/media";
import GlobalStyle from "./style/GlobalStyle";
import HomePage from "./pages/HomePage";
import Footer from "./components/global/Footer";

function App() {
  return (
    <ThemeProvider theme={{ ...media }}>
      <GlobalStyle />
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
