import { ThemeProvider } from "styled-components";
import Header from "./components/global/Header";
import { media } from "./style/media";
import GlobalStyle from "./style/GlobalStyle";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={{ ...media }}>
      <GlobalStyle />
      <Header />
      <HomePage />

      <Routes></Routes>
    </ThemeProvider>
  );
}

export default App;
