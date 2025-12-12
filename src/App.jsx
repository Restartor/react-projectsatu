import Card from './card/Card.jsx';
import Button from './button/Button.jsx';
import CardFilm from './Card Film/cardFilm.jsx';
import styles from './Card Film/cardFilm.module.css';
import DropdownMenu from './Navigation Bar/dropdownMenu.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import UserGreeting from './User Greeting/UserGreeting.jsx';

function App() {
    return (
      <>
      <DropdownMenu />
      <UserGreeting isLoggedIn={true} name="Asep"/>
      <div className={styles.cardFilmContainer}>
        <CardFilm 
          gambar="https://image.tmdb.org/t/p/original/hD4UoR4ZUXYBoKhKRwrJiTFLqCo.jpg"
          judul="Tulsa King"
          tahun="2025"
          deskripsi="Tulsa king menceritakan tentang mantan komando mafia yang pensiun dan membuat kerajaan mafia baru"
        />
        <CardFilm 
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6vcDalR50RWa309vBH1NLmG2rjQ.jpg"
          judul="John Wick 4"
          tahun="2023"
          deskripsi="John Wick kembali beraksi melawan musuh-musuh lamanya dalam pertempuran epik yang menegangkan."
        />
        <CardFilm 
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"
          judul="Black Panther: Wakanda Forever"
          tahun="2022"
          deskripsi="Setelah kematian Raja T'Challa, Wakanda menghadapi ancaman baru dari musuh-musuh lama dan baru."
        />
        <CardFilm
          judul="Avengers: Endgame"
          tahun="2019"
          deskripsi="Para pahlawan super bersatu untuk mengalahkan Thanos dan mengembalikan keseimbangan alam semesta."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        />
      </div>

      </>
    );
}

export default App
