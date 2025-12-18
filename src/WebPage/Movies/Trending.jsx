import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import styles from '../genreFilms/Genre.module.css';
import React from 'react';
import CardFilm from "../../3.Props (CardFilm)/cardFilm";

function Trending() {
    return (
        <div>
            <DropdownMenu />
            <div className={styles.genreFilmsContainer}>
                <h1 className={styles.title}>Trending Movies</h1>
                <div className="CardFilmContainer">
                    
                    </div>            
            </div>

        </div>
    );
}

export default Trending;