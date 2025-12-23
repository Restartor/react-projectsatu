
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
        <CardFilm id="tulsa-king"/>
        <CardFilm id="john-wick-4"/>
        <CardFilm id="black-panther-wakanda-forever"/>
        <CardFilm id="avengers-endgame"/>
        <CardFilm id="doctor-strange-multiverse"/>
        <CardFilm id="spiderman-no-way-home"/>
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
