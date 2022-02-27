import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,

      sidebar: string,
      background: string,
      text: string,

      black: string,
      white: string,
      blue: string,
      purple: string,

      danger: string,
      alert: string,
      success: string

    }
  }
}
