import Card from './1.Card Components/Card.jsx';
import Button from './2.Diffferent CSS Styles/Button.jsx';
import CardFilm from './3.Props (CardFilm)/cardFilm.jsx';
import styles from './3.Props (CardFilm)/cardFilm.module.css';
import DropdownMenu from './Navigation Bar(iseng)/dropdownMenu.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import UserGreeting from './4.Conditional Rendering/UserGreeting.jsx';
import List from './5.Rendering List/List.jsx';

function App() {

const films = [{id: 1,name: "Tulsa King", year: 2025},
                {id: 2, name: "John Wick 4", year: 2023}, 
                {id: 3, name: "Black Panther: Wakanda Forever", year: 2022}, 
                {id: 4, name: "Avengers: Endgame", year: 2019}];

const filmterbaru = [{id: 5, name: "Avatar: The Way of Water", year: 2022},
                    {id: 6,  name: "Doctor Strange in the Multiverse of Madness", year: 2022},
                    {id: 7, name: "Spider-Man: No Way Home", year: 2021},
                    {id: 8, name: "Dune", year: 2021}];

// penjelasan: kita bisa mengirimkan data array films sebagai props 
// ke komponen List dengan menambahkan atribut bioskop pada elemen 
// <List /> dan  memberikan nilai films pada atribut tersebut.


    return (
      <>
      {/**/}
      <DropdownMenu />
      <UserGreeting isLoggedIn={false} name="Asep"/>
      <div className={styles.cardFilmContainer}>
        <CardFilm 
          gambar="https://image.tmdb.org/t/p/original/hD4UoR4ZUXYBoKhKRwrJiTFLqCo.jpg"
          judul="Tulsa King"
          tahun="2025"
          deskripsi="Tulsa king menceritakan tentang mantan komando mafia yang pensiun dan membuat kerajaan mafia baru"
          videoLink="https://www.youtube.com/watch?v=aaQSScwZPbA"
        />
        <CardFilm 
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6vcDalR50RWa309vBH1NLmG2rjQ.jpg"
          judul="John Wick 4"
          tahun="2023"
          deskripsi="John Wick kembali beraksi melawan musuh-musuh lamanya dalam pertempuran epik yang menegangkan."
          videoLink="https://www.youtube.com/watch?v=qEVUtrk8_B4"
        />
        <CardFilm 
          judul="Black Panther: Wakanda Forever"
          tahun="2022"
          deskripsi="Setelah kematian Raja T'Challa, Wakanda menghadapi ancaman baru dari musuh-musuh lama dan baru."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          videoLink="https://www.youtube.com/watch?v=_Z3QKkl1WyM"
        />
        <CardFilm
          judul="Avengers: Endgame"
          tahun="2019"
          deskripsi="Para pahlawan super bersatu untuk mengalahkan Thanos dan mengembalikan keseimbangan alam semesta."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
          videoLink="https://www.youtube.com/watch?v=TcMBFSGVi1c"
        />
        <CardFilm
        judul="Doctor Strange in the Multiverse of Madness"
        tahun="2022"
        deskripsi="Doctor Strange menjelajahi multiverse yang berbahaya untuk melindungi realitas dari ancaman baru."
        gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
        videoLink="https://www.youtube.com/watch?v=aWzlQ2N6qqg"
        />
      </div>

      {films.length > 0 && <List bioskop={films} category="Film Terkenal"/>}
      {filmterbaru.length > 0 && <List bioskop={filmterbaru} category="Film terbaru"/>}
      </>
    );
}

export default App
