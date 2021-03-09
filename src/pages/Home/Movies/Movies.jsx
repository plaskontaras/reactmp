import React from 'react';
import movies from '../../../mockData/movies.json';
import MovieItem from './MovieItem/MovieItem';
import PropTypes from 'prop-types';
import style from './Movies.module.scss';

const Movies = () => {
    // throw new Error('I crashed!');
    return (
        <>
            <div className={style.moviesCounter}>
                {39} movies found
            </div>
            <div className={style.moviesWrapper}>
                {
                    movies.map((movie) => {
                        return <MovieItem
                            key={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            genres={movie.genres}
                            release_date={movie.release_date}
                        />
                    })
                }
            </div>
        </>
    )
}

export default Movies;

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    release_date: PropTypes.string.isRequired,
};