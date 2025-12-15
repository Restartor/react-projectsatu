import Card from './../1.Card Components/Card.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardFilm.module.css';

function CardFilm(props){
 
const videoFilm = props.videoLink ?? "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const genreFilm = props.genre ?? "Genre Film";

const openVideo = () => {
    window.open(videoFilm, "_blank");
}

const filmClicked = () => {
    alert(`Kamu memilih film: ${props.judul}`);
    openVideo();
}


    return(        
    <div className={styles.cardFilm} onClick={filmClicked}>
        <img src={props.gambar} alt="Poster Film" />
            <h2>{props.judul}</h2>
            <p className={styles.tahun}>{props.tahun}</p>
            <p>{props.deskripsi}</p>
            <p className={styles.genre}>{genreFilm}</p>
        </div>
    );
}

CardFilm.propTypes = {
    gambar: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    tahun: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    videoLink: PropTypes.string,
    // buatlah genre sebagai array of string agar bisa menampung lebih dari satu genre dan bisa di filter berdasarkan genre serta tampil di card film
    genre: PropTypes.arrayOf(PropTypes.string),
}
CardFilm.defaultProps = {
    gambar: "https://www.shutterstock.com/image-photo/big-screen-rows-red-seats-600nw-2513489879.jpg",
    judul: "Judul Film",
    tahun: "Tahun Rilis",
    deskripsi: "Deskripsi singkat tentang film ini.",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    genre:["Genre Film"],
}


export default CardFilm;