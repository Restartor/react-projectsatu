import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './MoviesPage.module.css';
import React from 'react';


function MostWatched() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Most Watched Movies</h1>
                <p className={styles.description}>Daftar film yang paling banyak ditonton akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default MostWatched;