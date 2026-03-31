import { createContext, useContext, useState } from "react";
import { ConfigProvider, theme } from "antd";

interface IThemeContext {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: darkMode
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext)!;
};