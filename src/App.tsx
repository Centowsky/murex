import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTopButton from "./components/main/ScrollToTopButton";
import Footer from "./components/main/Footer";
import Gallery from "./pages/Gallery";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
    <ScrollToTopButton />
    <Footer />
  </BrowserRouter>
);

export default App;
