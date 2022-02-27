import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Editor } from './components/Editor'

// GlobalStyles
import GlobalStyles from './styles/global'

// Themes
import light from './styles/theme/light'
import dark from './styles/theme/dark'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header />
      <Editor />
    </ThemeProvider>
  )
}

export default App
