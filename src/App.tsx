import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Import HashRouter
// Dark Mode Script
import { applyTheme } from "./utils/themeUtils";
// Visibility Script
import { onDOMReady } from "./utils/domUtils";
// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blockchain from "./pages/Blockchain";
// import WalletOverviewPage from "./pages/WalletOverviewPage";
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
      <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use path="/" for index */}
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blockchain" element={<Blockchain />} />
          {/* <Route path="/wallet-overview" element={<WalletOverviewPage />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
