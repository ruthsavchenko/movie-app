import React, { useEffect } from 'react'
import '../style/MovieDetails.css'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Movies } from '../components/Movies'
import { fetchMovies } from '../redux/actions/action';

function MovieDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movies = useSelector(state => state.movies)
    let moviesById = [];

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    for (let item of movies) {
        if (item.id === +id) {
            moviesById.push(item)
        }
    }

    console.log(id)

    console.log(moviesById)

    return (
        <div>
            {moviesById.map((movie) => (
                <div className="movies-details-container">
                    <div key={movie.id} className="poster">
                        <img src={movie.poster} alt="poster" />
                        <button className="buy-tickets">Купить билет</button>
                    </div>
                    <div className="text">
                        <h1 className="title">{movie.title}</h1>
                        <p>Актёры: {movie.actors.join(', ')}</p>
                        <p>Жанр: {movie.genre.join(', ')}</p>
                        <p>Страна: {movie.country.join(', ')}</p>
                        <p>Перевод: {movie.language}</p>
                        <p>Возраст: {movie.age}+</p>
                        <p>{movie.description}</p>
                        <iframe src={movie.trailer}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieDetails
