import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
