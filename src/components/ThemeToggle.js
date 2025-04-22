import React from "react";

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      // onclick is used to do an action
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      // setTheme is used and if theme is equal to and type to light then light theme or else dark
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
