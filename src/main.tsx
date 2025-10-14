import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router'
import Theme from './config/theme'
import Router from './config/router'

const App: FC = () => {
  return(
    <ThemeProvider theme={Theme}>
      <RouterProvider router = {Router} />
    </ThemeProvider>
    
  ) 
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
