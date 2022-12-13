import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./localization/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { UrlRoutes } from "./types";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { StatusProvider } from "./context/StatusContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <StatusProvider>
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
        </StatusProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
