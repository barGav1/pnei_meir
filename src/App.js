import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import About from "./pages/about";
import Events from "./pages/Events";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
