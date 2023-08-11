import React, { ReactNode } from 'react'
import { GlobalStyle } from '../utils/styles/StyleComponents'
import { useTheme } from '../utils/context/ThemeContext'
import '../utils/styles/reset.css'

interface PageProps {
  children: ReactNode
}

const Layout: React.FC<PageProps> = ({ children }) => {
  const { theme } = useTheme()
  return (
    <main>
      <GlobalStyle theme={theme} />
      {children}
    </main>
  )
}

export default Layout
