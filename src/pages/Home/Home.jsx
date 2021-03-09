import React from 'react';
import ErrorBoundary from '../../common/ErrorBoundary';
import Movies from './Movies/Movies';
import NavBar from './Navbar/NavBar';
import style from './Home.module.scss';

const Home = () => {
    return (
        <main className={style.container}>
            <NavBar />
            <ErrorBoundary>
                <Movies />
            </ErrorBoundary>
        </main>
    )
}

export default Home;