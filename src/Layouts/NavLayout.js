import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"
const NavLayout = () => {
    return (
        <div class= "nav-layout">
        <NavBar/>
        <Outlet/>
        </div>
    )
}

export default NavLayout