import React from 'react';
import style from './Header.module.scss';
import Search from './Search/Search';

const Header = () => {
    return (
        <section className={style.container}>
            <div className={style.background} />
            <div className={style.info}>
                <div className={style.addMovieContainer}>
                    <div className={style.logo}>
                        <span>netflix</span>roulette
                    </div>
                    <button className={style.addMovieButton}>
                        + add movie
                    </button>
                </div>
                <div className={style.searchContainer}>
                    <Search />
                </div>
            </div>
        </section>
    )
}

export default Header;