import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavbarLayOut from "./NavbarLayOut/NavbarLayOut";


const Main = () => {
    return (
        <div>
            <NavbarLayOut>
            <Outlet></Outlet>
            <Footer></Footer>
            </NavbarLayOut>
        </div>
    );
};

export default Main;