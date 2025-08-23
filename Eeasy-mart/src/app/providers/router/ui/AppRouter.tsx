import { Route, Routes } from "react-router"
import { routeConfig } from "../routerConfig"
import { Suspense } from "react"
// import { Route } from "react-router"

// createBrowserRouter,RouterProvider  const router = createBrowserRouter(routeConfig);

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({path, element})=> <Route key={path} path={path} element={<Suspense key={path} fallback={"Loading...."}>{element}</Suspense>} ></Route>
    )}
    </Routes>
    // <RouterProvider router={router} />
  )
}
