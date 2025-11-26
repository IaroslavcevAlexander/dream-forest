import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router'
import theme from './config/theme'
import Router from './config/router'
import globalStyles from './config/globalStyle'
import { GlobalStyles } from '@mui/material'
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App: FC = () => {
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <RouterProvider router = {Router} />
      </ThemeProvider>
    </Provider>
  ) 
} 

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)

