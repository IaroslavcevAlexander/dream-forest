import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

function convert(m: any) {
  let {
    clientLoader,
    clientAction,
    default: Component,
    ...rest
  } = m;
  return {
    ...rest,
    loader: clientLoader,
    action: clientAction,
    Component,
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./components/layouts/RootLayout").then(convert),
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home/").then(convert)
      },
      {
        path: "contact",
        lazy: () => import("./pages/Contact").then(convert)
      },
      {
        path: "about",
        lazy: () => import("./pages/About").then(convert)
      },
      {
        path: "catalog",
        lazy: () => import("./components/layouts/CatalogLayout").then(convert),
        children: [
          {
            index: true,
            lazy: () => import("./pages/Catalog").then(convert),
          }
        ]
      },
    ]
  }
])

const App = () => {
  
  return <RouterProvider router = {router} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
