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

const Router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("../components/layouts/RootLayout").then(convert),
    children: [
      {
        path: "delivery",
        lazy: () => import("../pages/Delivery").then(convert)
      },
      {
        path: "language",
        lazy: () => import("../pages/Language").then(convert)
      },
      {
        index: true,
        lazy: () => import("../pages/Home").then(convert)
      },
      {
        path: "contact",
        lazy: () => import("../pages/Contact").then(convert)
      },
      {
        path: "about",
        lazy: () => import("../pages/About").then(convert)
      },
      {
        path: "catalog",
        lazy: () => import("../components/layouts/CatalogLayout").then(convert),
        children: [
          {
            index: true,
            lazy: () => import("../pages/Catalog").then(convert),
          }
        ]
      },
    ]
  }
])
export default Router;

