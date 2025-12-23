import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from './Genre.module.css';
import React from 'react';

function ActionGenre() {


    return (
<>
    <DropdownMenu />
        <div className={styles.genreFilmsContainer}>
            <h1 className={styles.title}>Action Genre Films</h1>
            <p className={styles.description}>Daftar film dengan genre Action akan ditampilkan di sini.</p>
        </div>
</>

    );
}

export default ActionGenre;