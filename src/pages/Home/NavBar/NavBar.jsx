import React from 'react';
import style from './NavBar.module.scss';
import genres from '../../../mockData/genres.json';
import filterOptions from '../../../mockData/filterOptions.json';

const NavBar = () => {
    return (
        <nav className={style.container}>
            <div className={style.filterList}>
                {
                    genres.map(genre => <div
                        tabIndex="0"
                        key={genre.id}
                        className={style.filterItem}>
                        {genre.genre}
                    </div>)
                }
            </div>
            <div className={style.sortByContainer}>
                <div className={style.sortByText}>sort by</div>
                <select className={style.sortByList}>
                    {
                        filterOptions.map(option => <option
                            key={option.id}
                            value={option.filter}
                            className={style.sortByItem}>
                            {option.filter.split("_").join(" ")}
                        </option>)
                    }
                </select>
            </div>
        </nav>
    )
}

export default NavBar;