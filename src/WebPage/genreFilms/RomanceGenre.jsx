import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './Genre.module.css';
import React from 'react';

function RomanceGenre() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Romance Genre Films</h1>
                <p className={styles.description}>Daftar film dengan genre Romance akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default RomanceGenre;