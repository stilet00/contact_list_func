import { createContext, useState, useCallback } from "react";

export const THEMES = {
  white: {
    background: "white",
  },
  black: {
    background: "#e5e5e5",
  },
};
export let themeContext = createContext(null);

export function useThemeContext() {
  const [theme, setTheme] = useState(THEMES.white);
  const [isLight, setIsLight] = useState(true);

  function setWhiteTheme() {
    setTheme(THEMES.white);
  }

  function setBlackTheme() {
    setTheme(THEMES.black);
  }

  const handleChange = useCallback(
    (value) => {
      if (isLight) {
        setIsLight(value);
        setBlackTheme();
      } else {
        setIsLight(value);
        setWhiteTheme();
      }
    },
    [isLight]
  );

  const contextValue = {
    theme,
    isLight,
    handleChange,
  };
  return {
    contextValue,
  };
}
