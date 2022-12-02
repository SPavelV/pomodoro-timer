import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<div>Settings page</div>} />
          <Route path="statistics" element={<div>Statistics page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
