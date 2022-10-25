const MovieListPage = () => {
    return (
        <div class= "movie-sidebar">
        <h1> "Movie List Page</h1>
        <div class= "movie-list">
        {props.movieList.map((movie) => {
			return <MovieCard movie={movie} />;
		})}
        </div>
        </div>
    )
}

export default MovieListPage