import React from 'react';
import style from './Search.module.scss';

const Search = () => {
    return (
        <>
            <div className={style.title}>find your movie</div>
            <form action="#" className={style.searchForm}>
                <input 
                    type="text" 
                    placeholder="What do you want to watch?" 
                    className={style.searchInput}
                    />
                <button className={style.searchButton}>search</button>
            </form>
        </>
    )
}

export default Search;