import { Route, Routes } from "react-router"
import App from "../App";

const AppRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<App/>}></Route>
        </Routes>
    </>
}

export default AppRoutes;