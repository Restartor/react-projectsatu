import React, {useState} from "react";
import {useLocation, Link} from "react-router-dom";
import styles from './dropdownMenu.module.css';
import webicon from '../ASSET NEGARA/webicon.png'

const routeTitle = (path) => {
  if (path === "/") return "Home";
  if (path.startsWith("/films/category/action")) return "Action";
  if (path.startsWith("/films/category/comedy")) return "Comedy";
  if (path.startsWith("/films/category/horror")) return "Horror";
  if (path.startsWith("/films/category/romance")) return "Romance";
  if (path.startsWith("/films/category/fiction")) return "Fiction";
  if (path.startsWith("/films/category/adventure")) return "Adventure";
  if (path.startsWith("/films/category/thriller")) return "Thriller";
  if (path.startsWith("/films/category/animation")) return "Animation";
  if (path.startsWith("/films/movies/most-watched")) return "Most Watched";
  if (path.startsWith("/films/movies/top-rated")) return "Top Rated Movies";
  if (path.startsWith("/films/movies/trending")) return "Trending Movies";


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
        <img src={webicon} alt="Website Icon" className={styles.logonavbar}onClick={() => {window.location.href = '/';}} />
        <h2 className={styles.navTitle} onClick={() => {window.location.href = '/';}  }>{title}</h2>
        <li className={styles.navItem}>
          Genre
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><Link to="/films/category/action">Action</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/comedy">Comedy</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/horror">Horror</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/romance">Romance</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/fiction">Fiction</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/adventure">Adventure</Link></li>  
            <li className={styles.dropdownItem}><Link to="/films/category/thriller">Thriller</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/category/animation">Animation</Link></li>
          </ul>
        </li>
        <li className={styles.navItem}> 
          Movies
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><Link to="/films/movies/most-watched">Most Watched</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/movies/top-rated">Top Rated</Link></li>
            <li className={styles.dropdownItem}><Link to="/films/movies/trending">Trending</Link></li> 
          </ul>
        </li>
      </ul>
    </nav>





  );
}

export default DropdownMenu;

// useState digunakan untuk menyimpan nilai genre dan tahun yang dipilih 
// oleh pengguna dari dropdown menu.
