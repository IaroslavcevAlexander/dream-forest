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
        index: true,
        lazy: importPageComponent("../pages/Home"),
      },
      {
        path: "catalog/:id",
        lazy: importPageComponent("../pages/Catalog"),
      },
      {
        path: "catalog/:id",
        lazy: importPageComponent("../pages/Catalog/index"),
      },
      {
        path: "delivery",
        lazy: importPageComponent("../pages/Delivery"),
      },
      {
        path: "settings",
        lazy: importPageComponent("../components/modals/Settings"),
      },
      {
        path: "product/:id",
        lazy: importPageComponent("../pages/ProductPage"),
      },

    ]
  }
])
export default router;

