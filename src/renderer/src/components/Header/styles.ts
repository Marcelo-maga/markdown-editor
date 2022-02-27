import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-area: HE;
  height: 30px;
  width: 100%;
  display: flex;

  border-bottom: solid ${props => props.theme.colors.sidebar} 1px;

  -webkit-app-region: drag;

`
