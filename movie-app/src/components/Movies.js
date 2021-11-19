import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchSessions } from '../redux/actions/action';
import '../style/Movies.css'

function Movies() {
    const [searchMovie, setSearchMovie] = useState('')
    let [select, setSelect] = useState('');

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies);
    const sessions = useSelector(state => state.sessions);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchSessions());
    }, [dispatch]);

    // console.log(sessions)

    let movieId = [];
    let currentMovies = [];

    for (let item of sessions) {
        if (movieId.includes(item.movie.id)) {
            continue;
        }
        else {
            movieId.push(item.movie.id)
        }
    }

    for (let item of movies) {
        if (movieId.includes(item.id)) {
            currentMovies.push(item)
        }
    }

    console.log(currentMovies)

    const onSearch = e => {
        setSearchMovie(e.target.value)
    }

    let genres = ["все жанры"]
    for (let item of movies){
        for (let genre of item.genre){
            if (genres.includes(genre)){
                continue;
            }
            else {
                genres.push(genre)
            }
        }
    }

    console.log(genres)

    let options = genres.map((genre) => (
        <option value={genre}>{genre}</option>
    ))

    const handleSelect = (event) => {
        setSelect(event.target.value);
    }

    if(searchMovie) {
        currentMovies = currentMovies.filter(movie =>
            `${movie.title}`
                .toUpperCase()
                .includes(searchMovie.toUpperCase())
        )
    }


    return (
        <div>
            <div className="search-movies">
                <input type="search" placeholder="Поиск..." value={searchMovie} onChange={onSearch} />
                {/* <select
                    // defaultValue={selectedGenre}
                    // onChange={e => onGenreChange(e.target.value)}
                    >
                    <option value="all" >All</option>
                    {movies.map((el, i) =>
                        <option key={movies.genre} value={movies.genre}>{movies.genre}</option>
                    )}
                </select> */}
                <select onChange={handleSelect} className={'movie-select'}>
                    {options}
                </select>
            </div>
            <div className="movies-container">
                {currentMovies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movies/${movie.id}`}>
                            <img src={movie.poster} alt="poster" />
                        </Link>
                        <div>
                            <p>{movie.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;