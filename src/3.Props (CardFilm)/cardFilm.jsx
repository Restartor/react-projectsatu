import Card from './../1.Card Components/Card.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardFilm.module.css';

function CardFilm(props){


    return(        <div className={styles.cardFilm}>
            <img src={props.gambar} alt="Poster Film" />
            <h2>{props.judul}</h2>
            <p className={styles.tahun}>{props.tahun}</p>
            <p>{props.deskripsi}</p>
        </div>
    );
}

CardFilm.propTypes = {
    gambar: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    tahun: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
}
CardFilm.defaultProps = {
    gambar: "https://www.shutterstock.com/image-photo/big-screen-rows-red-seats-600nw-2513489879.jpg",
    judul: "Judul Film",
    tahun: "Tahun Rilis",
    deskripsi: "Deskripsi singkat tentang film ini.",
}


export default CardFilm;