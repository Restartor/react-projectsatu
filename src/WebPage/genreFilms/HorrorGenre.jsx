import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './Genre.module.css';
import React from 'react';

function HorrorGenre() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Horror Genre Films</h1>
                <p className={styles.description}>Daftar film dengan genre Horror akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default HorrorGenre;