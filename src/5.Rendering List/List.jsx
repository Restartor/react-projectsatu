
import styles from './List.module.css';
import React, { use } from 'react';
import PropTypes, { func } from 'prop-types';


function List(props) {


// films.sort((a, b) => a.name.localeCompare(b.name));
// penjelasan: metode sort() digunakan untuk mengurutkan 
// array films berdasarkan properti name dari setiap objek film. 
// Fungsi pembanding yang diberikan menggunakan localeCompare() 
// untuk membandingkan string nama film secara alfabetis.

//   films.sort((a, b) => a.year - b.year);
// numeric sort ascending berdasarkan tahun rilis

//const sortedFilmsyear = films.filter(films => films.year >= 2022);
// penjelasan: metode filter() digunakan untuk membuat 
 // array baru yang hanya berisi film-film dengan tahun 
 // rilis 2022 atau lebih baru.
 const category = props.category ?? "Daftar Film";
 const filmsList = props.bioskop ?? [];



    const pencetNontonLinkFilm = (link) => {
        if (link) {
            window.open(link, "_blank");
        } else {
            alert("Maaf, link film tidak tersedia.");
        }
    }

    const listFilms = filmsList.map(bioskop=> 
            <li onClick={() => pencetNontonLinkFilm(bioskop.linkfilms)} key={bioskop.id} >{bioskop.name}: &nbsp;<b style={{color: "red"}}>{bioskop.year}</b>
            </li>) 
    // penjelasan: fungsi map() digunakan untuk mengiterasi 
    // setiap elemen dalam array films dan mengembalikan elemen JSX 
    // <li> yang berisi nama film tersebut. Hasil dari map() adalah 
    // array baru yang berisi elemen-elemen JSX tersebut.

    


    return( 
        <>
            <h2 className={styles.categoryTitle}>
                {category}
            </h2>
        <ul className={styles.listContainer}>
            {listFilms}
        </ul>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    bioskop: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            year: PropTypes.number,
            linkfilm: PropTypes.string,
        })
    ),
                            }


List.defaultProps = {
    category: "Daftar Film",
    bioskop: [],
}

export default List;