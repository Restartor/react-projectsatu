import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './MoviesPage.module.css';
import React from 'react';

function TopRated() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Top Rated Movies</h1>
                <p className={styles.description}>Daftar film dengan rating tertinggi akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default TopRated;