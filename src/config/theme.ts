import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CommonColors {
    green: string
  }
}

const theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
      black: '#1F1F1F',
    },

    grey: {
      50: '#424242',
    },
  },
})
export default theme;