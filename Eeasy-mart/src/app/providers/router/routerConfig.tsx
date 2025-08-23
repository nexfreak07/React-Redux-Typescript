import { HomePage } from "@/pages/Home";
import {LoginPage} from "@/pages/Login";
import { AppRoutes, routePaths } from "@/shared/config/router/routerPaths";
import type { RouteProps } from "react-router"; //RouteObject



export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage></HomePage>

    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage></LoginPage>
    }
]