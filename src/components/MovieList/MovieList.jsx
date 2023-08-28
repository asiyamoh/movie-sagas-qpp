import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (id) => {
        console.log('CLICKED')
        console.log('movie id:', id)
        history.push(`/details/${id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <button onClick={() => handleClick(movie.id)} key={movie.id}>
                            <div>
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} />
                            </div>
                        </button>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;