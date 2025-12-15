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
                        <CardFilm 
                        judul="Spiderman: No Way Home"
                        tahun="2021"
                        deskripsi="Peter Parker menghadapi konsekuensi dari identitasnya yang terungkap dan berhadapan dengan musuh-musuh dari dimensi lain."
                        gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                        videoLink="https://www.youtube.com/watch?v=JfVOs4VSpmA"
                        genre={["Action ", "Adventure ", "Sci-Fi "]}

                        />
                    </div>            
            </div>

        </div>
    );
}

export default Trending;