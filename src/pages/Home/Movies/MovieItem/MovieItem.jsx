import React from 'react'
import style from './MovieItem.module.scss';

function MovieItem(props) {
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <span className={style.dots}>&#8942;</span>
            </div>
            <img 
                src={props.poster_path} 
                alt="poster" 
                className={style.poster}
                />
            <div className={style.infoContainer}>
                <div className={style.info}>
                    {props.title}
                </div>
                <div className={style.releaseDate}>
                    {new Date(props.release_date).getFullYear()}
                </div>
            </div>
            <div className={style.genre}>
                {props.genres.join(", ").split("")}
            </div>
        </div>
    )
}

export default MovieItem;