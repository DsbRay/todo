// gatsby-browser.js and gatsby-ssr.js
import React from 'react'
import { ThemeProvider } from './src/utils/context/ThemeContext'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
