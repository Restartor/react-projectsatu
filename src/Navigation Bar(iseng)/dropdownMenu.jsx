import React, {useState} from "react";
import {useLocation, Link} from "react-router-dom";
import styles from './dropdownMenu.module.css';

const routeTitle = (path) => {
  if (path === "/") return "Home";
  if (path.startsWith("/films/genre/action")) return "Action";
  if (path.startsWith("/films/genre/comedy")) return "Comedy";
  if (path.startsWith("/films/genre/horror")) return "Horror";
  if (path.startsWith("/films/genre/romance")) return "Romance";
  if (path.startsWith("/films/genre/fiction")) return "Fiction";
  if (path.startsWith("/films/genre/adventure")) return "Adventure";
  if (path.startsWith("/films/genre/thriller")) return "Thriller";
  if (path.startsWith("/films/genre/animation")) return "Animation";
  return "Page";
};


function DropdownMenu() {

const location = useLocation();
const title = routeTitle(location.pathname);


  return (
    // buatlah dropdown menu jika di hover bagian genre maka akan muncul pilihan genre film seperti Action, Comedy, Horror, Romance, Fiction, Adventure, Thriller, Animation 
    // saat di klik genre tsb akan mengarah ke halaman baru yang menampilkan daftar film berdasarkan genre yang dipilih
    // buatlah dropdown menu jika di hover bagian movies maka akan muncul most popular, upcoming, top rated
    // saat di klik akan mengarah ke halaman baru yang menampilkan daftar film berdasarkan pilihan tsb
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <img src="webicon.png" alt="Website Icon" className={styles.logonavbar}onClick={() => {window.location.href = '/';}} />
        <h2 className={styles.navTitle}>{title}</h2>
        <li className={styles.navItem}>
          Genre
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><Link to="/films/genre/action">Action</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/comedy">Comedy</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/horror">Horror</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/romance">Romance</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/fiction">Fiction</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/adventure">Adventure</Link></li>  
            <li className={styles.dropdownItem}><Link to="/films/genre/thriller">Thriller</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/genre/animation">Animation</Link></li>
          </ul>
        </li>
        <li className={styles.navItem}> 
          Movies
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><Link to="/films/movies/most-popular">Most Popular</ Link></li>
            <li className={styles.dropdownItem}><Link to="/films/movies/upcoming">Upcoming</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/movies/top-rated">Top Rated</Link></li>
          </ul>
        </li>
      </ul>
    </nav>





  );
}

export default DropdownMenu;

// useState digunakan untuk menyimpan nilai genre dan tahun yang dipilih 
// oleh pengguna dari dropdown menu.
