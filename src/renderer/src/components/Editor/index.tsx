import React from 'react'

import { Wrapper, CodeEditor, Result } from './styles'

const Editor: React.FC = () => {
  return (
    <Wrapper>
      <CodeEditor>
        <h1>Meu deus do ceu me mata</h1>
      </CodeEditor>
      <Result>
        <h1>oi</h1>
      </Result>
    </Wrapper>
  )
}

export { Editor }
