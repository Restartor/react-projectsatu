import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './Genre.module.css';
import React from 'react';


function AdventureGenre() {
    return (
        <div>
    <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Adventure Genre Films</h1>
                <p className={styles.description}>Daftar film dengan genre Adventure akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}

export default AdventureGenre;