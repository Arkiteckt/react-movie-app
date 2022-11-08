import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div class= "nav-bar" >
            <Link to="/">Home Page</Link>
            <Link to="/movies">Movie List</Link>
        </div>
    )
}

export default NavBar

//Set the class of the enclosing <divs>'s in <NavBar/> to be the class "nav-bar". 