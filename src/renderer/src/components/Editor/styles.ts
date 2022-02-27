// ED -> Editor
// RE -> Result

import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-area: ED;
  display: grid;

  grid-template-areas: 
  "ED RE";

  grid-template-columns: 50% 50%;
  padding: 10px;
`

export const CodeEditor = styled.div`
  grid-area: ED;
`

export const Result = styled.div`
  grid-area: RE;
`
