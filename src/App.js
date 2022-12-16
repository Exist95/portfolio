import { ThemeProvider } from "styled-components";
import Header from "./components/global/Header";
import { media, hover } from "./style/media";
import GlobalStyle from "./style/GlobalStyle";
import HomePage from "./pages/HomePage";
import Footer from "./components/global/Footer";

function App() {
  return (
    <ThemeProvider theme={{ ...media, ...hover }}>
      <GlobalStyle />
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
