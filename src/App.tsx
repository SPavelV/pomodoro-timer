import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./localization/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { UrlRoutes } from "./types";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={UrlRoutes.Settings} element={<SettingsPage />} />
            <Route
              path={UrlRoutes.Statistic}
              element={<div>Statistics page</div>}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
