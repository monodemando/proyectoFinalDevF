import { Route, Routes } from "react-router"
import App from "../App";
import CharacterInfo from "../components/organisms/CharacterInfo";


const AppRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/character/:id" element={<CharacterInfo />} />
        </Routes>
    </>
}

export default AppRoutes;