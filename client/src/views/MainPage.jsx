import Navbar2 from "../components/Navbar2";

import { Outlet } from "react-router-dom";
const MainPage = () => {
    return (
        <>
            <Navbar2 />

            <Outlet />
        </>
    );
};
export default MainPage;
