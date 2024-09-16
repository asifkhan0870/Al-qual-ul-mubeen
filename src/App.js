import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./index.css"; // Global styles or index.css

import Hadith from "./pages/Hadith";
import Fiqh from "./pages/Fiqh";
import BDAI from "./pages/BDAI";
import SSI from "./pages/SSI";
import Usool from "./pages/Usool";

import Translation from "./pages/Translation/Translation";
import Tafseer from "./pages/Tafseer/Tafseer";
import Recitation from "./pages/Recitation/Recitation";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* routing for quran portion  */}

        <Route path="/quran/translation" element={<Translation />} />
        <Route path="/quran/tafseer" element={<Tafseer />} />
        <Route path="/quran/readquran" element={<Recitation />} />

        <Route path="/hadith" element={<Hadith />} />
        <Route path="/fiqh" element={<Fiqh />} />
        <Route path="/usool" element={<Usool />} />
        <Route path="/bdai" element={<BDAI />} />
        <Route path="/ssi" element={<SSI />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default App;
