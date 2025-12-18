
import CardFilm from './3.Props (CardFilm)/cardFilm.jsx';
import styles from './ASSET NEGARA/App.module.css';
import DropdownMenu from './Navigation Bar(iseng)/dropdownMenu.jsx';
import UserGreeting from './4.Conditional Rendering/UserGreeting.jsx';
import List from './5.Rendering List/List.jsx';
import FooterWeb from './FooterNIH/FooterWeb.jsx';
import VideoWebPage from './WebPage/MenontonVideo/VideoWebPage.jsx';

function App() {
// berikan link film pada setiap objek di array films
const films = [{id: 1,name: "Tulsa King", year: 2025, linkfilms: "https://www.youtube.com/watch?v=aaQSScwZPbA"},
                {id: 2, name: "John Wick 4", year: 2023, linkfilms: "https://www.youtube.com/watch?v=qEVUtrk8_B4"}, 
                {id: 3, name: "Black Panther: Wakanda Forever", year: 2022, linkfilms: "https://www.youtube.com/watch?v=_Z3QKkl1WyM"}, 
                {id: 4, name: "Avengers: Endgame", year: 2019, linkfilms: "https://www.youtube.com/watch?v=TcMBFSGVi1c"}];

const filmterbaru = [{id: 5, name: "Avatar: The Way of Water", year: 2022},
                    {id: 6,  name: "Doctor Strange in the Multiverse of Madness", year: 2022},
                    {id: 7, name: "Spider-Man: No Way Home", year: 2021,},
                    {id: 8, name: "Dune", year: 2021}];

// penjelasan: kita bisa mengirimkan data array films sebagai props 
// ke komponen List dengan menambahkan atribut bioskop pada elemen 
// <List /> dan  memberikan nilai films pada atribut tersebut.


    return (
      <>
      <DropdownMenu />
          
      <UserGreeting isLoggedIn={true} name="Asep"/>
      <div className={styles.WelcomeWoy}>Happy Watching!!😎</div>

      <div className={styles.cardFilmContainer}>
        <CardFilm 
          id="tulsa-king"
          judul="Tulsa King"
          gambar="https://image.tmdb.org/t/p/original/hD4UoR4ZUXYBoKhKRwrJiTFLqCo.jpg"
          tahun="2025"
          deskripsi="Tulsa king menceritakan tentang mantan komando mafia yang pensiun dan membuat kerajaan mafia baru"
          genre={["Action ", "Crime ", "Drama "]}
        />
        <CardFilm
          id="john-wick-4"
          judul="John Wick 4"
          tahun="2023"
          deskripsi="John Wick kembali beraksi melawan musuh-musuh lamanya dalam pertempuran epik yang menegangkan."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
          genre={["Action ", "Thriller "]}

        />
        <CardFilm 
          id="black-panther-wakanda-forever"
          judul="Black Panther: Wakanda Forever"
          tahun="2022"
          deskripsi="Setelah kematian Raja T'Challa, Wakanda menghadapi ancaman baru dari musuh-musuh lama dan baru."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          genre={["Action ", "Adventure "]}
        />
        <CardFilm
          id="avengers-endgame"
          judul="Avengers: Endgame"
          tahun="2019"
          deskripsi="Para pahlawan super bersatu untuk mengalahkan Thanos dan mengembalikan keseimbangan alam semesta."
          gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
          genre={["Action ", "Adventure ", "Sci-Fi "]}
        />
        <CardFilm
        id="doctor-strange-multiverse"
        judul="Doctor Strange in the Multiverse of Madness"
        tahun="2022"
        deskripsi="Doctor Strange menjelajahi multiverse yang berbahaya untuk melindungi realitas dari ancaman baru."
        gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
        genre={["Action ", "Adventure ", "Fantasy "]}
        />
        <CardFilm 
        id="spiderman-no-way-home"
        judul="Spiderman: No Way Home"
        tahun="2021"
        deskripsi="Peter Parker menghadapi konsekuensi dari identitasnya yang terungkap dan berhadapan dengan musuh-musuh dari dimensi lain."
        gambar="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        genre={["Action ", "Adventure ", "Sci-Fi "]}
        />
      </div>

      
        <span>      
          {films.length > 0 && <List bioskop={films} category="Film Terkenal"/>}
           {filmterbaru.length > 0 && <List bioskop={filmterbaru} category="Film terbaru"/>}
        </span> 
        <div>
          <FooterWeb />
        </div>
        

      </>
    );
}

export default App
