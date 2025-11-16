import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;