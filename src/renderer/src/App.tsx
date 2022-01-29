import React from 'react'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'

// GlobalStyles
import GlobalStyles from './styles/global'

// Themes
import light from './styles/theme/light'
import dark from './styles/theme/dark'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
