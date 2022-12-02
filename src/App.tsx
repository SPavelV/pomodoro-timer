import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { ColorTheme } from "./types";

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
            <Route path="settings" element={<div>Settings page</div>} />
            <Route path="statistics" element={<div>Statistics page</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
