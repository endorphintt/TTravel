import { Routes, Route, Navigate } from "react-router-dom";
import { ROCKET_ROUTE } from "../../utils/consts";
import { authRoutes, publicRoutes } from "./routes";

type Routes = {
    path: string;
    Component: React.ReactNode
}


export default function AppRouter() {
    const user = { isAuth: false }
  return (
    <Routes>
        {user.isAuth === true && authRoutes.map(({path, Component}: Routes) => <Route key={path} path={path} element={ Component }/>)}
        {user.isAuth === false && publicRoutes.map(({path, Component}: Routes) => <Route key={path} path={path} element={ Component }/>)}
        <Route path='*' element={<Navigate to={ROCKET_ROUTE}/>} />
    </Routes>
  )
}
