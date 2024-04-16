import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Dark Mode Script
import { applyTheme } from "./utils/themeUtils";
// Visibility Script
import { onDOMReady } from "./utils/domUtils";
// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blockchain from "./pages/Blockchain"
import NoPage from "./pages/NoPage";

export default function App() {
  useEffect(() => {
    applyTheme();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onDOMReady(() => {
        document.body.style.visibility = "visible";
      });
    }, 200);
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/home">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
