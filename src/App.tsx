import React, { useEffect } from "react";
// Dark Mode Script
import { applyTheme } from "./utils/themeUtils";
// Visibility Script
import { onDOMReady } from './utils/domUtils';
// Components
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    applyTheme();
  }, []);

  useEffect(() => {
    setTimeout(() => {
        onDOMReady(() => {
            document.body.style.visibility = 'visible';
        });
    }, 200);
  }, []);

  return (
    <div className="App">
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
