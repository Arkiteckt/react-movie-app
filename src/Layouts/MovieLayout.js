import MovieSideBar from "../Components/MovieSidebar"
import {Outlet} from "react-router-dom"
const MovieLayout = () => {
    return (
        <div class= "movie-layout">
        <MovieSideBar/>
        <div class = "movie-content"> 
        <Outlet/></div>
        </div>
    )
}

export default MovieLayout