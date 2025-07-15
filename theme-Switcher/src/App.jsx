import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themeMode, setTheme] = useState("light");

  const LightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("Dark");
  };

  // actual change in themse
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "Dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, LightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
