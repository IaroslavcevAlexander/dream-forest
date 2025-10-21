import { createBrowserRouter } from 'react-router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convert = (m: any) => {
  const {
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

const importPageComponent = (path: string) => {
  return () => import(/* @vite-ignore */ path).then(convert);
}

const router = createBrowserRouter([
  {
    path: "/",
    lazy: importPageComponent("../components/layouts/RootLayout"),
    children: [
      {
        path: "delivery",
        lazy: importPageComponent("../pages/Delivery"),
      },
      {
        path: "settings",
        lazy: importPageComponent("../components/modals/Settings"),
      },
      {
        index: true,
        lazy: importPageComponent("../pages/Home"),
      },
      {
        path: "contact",
        lazy: importPageComponent("../pages/Contact"),
      },
      {
        path: "about",
        lazy: importPageComponent("../pages/About"),
      },
      {
        path: "catalog",
        lazy: importPageComponent("../components/layouts/CatalogLayout"),
        children: [
          {
            index: true,
            lazy: importPageComponent("../pages/Catalog"),
          }
        ]
      },
    ]
  }
])
export default router;

