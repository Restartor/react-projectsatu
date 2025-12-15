import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './Genre.module.css';
import React from 'react';

function AnimationGenre() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Animation Genre Films</h1>
                <p className={styles.description}>Daftar film dengan genre Animation akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default AnimationGenre;