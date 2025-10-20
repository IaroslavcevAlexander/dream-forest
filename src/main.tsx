import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router'
import theme from './config/theme'
import Router from './config/router'
import globalStyles from './config/globalStyle'
import { GlobalStyles } from '@mui/material'

const App: FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router = {Router} />
    </ThemeProvider>
  ) 
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

