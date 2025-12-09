import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import Test1 from "./pages/1";
import Test2 from "./pages/2";
import Test3 from "./pages/3";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/1" element={<Test1 />} />
        <Route path="/2" element={<Test2 />} />
        <Route path="/3" element={<Test3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
