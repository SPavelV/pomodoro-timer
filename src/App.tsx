import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./localization/i18n";
import { ThemeContext } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { ColorTheme, UrlRoutes } from "./types";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";

function App() {
  const [theme, setTheme] = useState(ColorTheme.Light);

  const themeState = useMemo(
    () => ({
      theme,
      switchTheme: () =>
        setTheme(
          theme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Light
        ),
    }),
    [theme]
  );

  return (
    <div className="App">
      <ThemeContext.Provider value={themeState}>
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
