// src/context/ThemeContext.js
import React, { createContext, useState, useContext, ReactNode } from 'react'
import { lightTheme, darkTheme } from '../styles/theme'

interface ThemeContextProps {
  theme: typeof lightTheme | typeof darkTheme
  toggleTheme: () => void
}

const defaultContextValue: ThemeContextProps = {
  theme: lightTheme,
  toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextProps>(defaultContextValue)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme)
  }

  const theme = isDarkTheme ? darkTheme : lightTheme

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
