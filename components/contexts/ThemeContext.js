import { useContext, createContext, useState } from "react";

const defaultTheme = "light";
export const ThemeContext = createContext({ theme: defaultTheme, undefined });
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
      ;
    </>
  );
};
