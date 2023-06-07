import Main from "../../pages/main/Main"
import Rocket from "../../pages/rocket/Rocket"
import { LOGIN_ROUTE, MAIN_ROUTE, NEW_PLACE, REGISTRATION_ROUTE, ROCKET_ROUTE, USER_ROUTE } from "../../utils/consts"

export const authRoutes = [
    {
        path: USER_ROUTE,
        Component: <h1>user</h1>
    },
    {
        path: NEW_PLACE,
        Component: <h1>newPlace</h1>
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: ROCKET_ROUTE,
        Component: <Rocket/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <h1>auth</h1>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <h1>auth</h1>
    },
    {
        path: USER_ROUTE,
        Component: <h1>user</h1>
    },
]