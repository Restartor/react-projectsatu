import React, {useState} from "react";
import styles from './dropdownMenu.module.css';

function DropdownMenu() {




  return (
    // buatlah dropdown menu jika di hover bagian genre maka akan muncul pilihan genre film seperti Action, Comedy, Horror, Romance, Fiction, Adventure, Thriller, Animation 
    // saat di klik genre tsb akan mengarah ke halaman baru yang menampilkan daftar film berdasarkan genre yang dipilih
    // buatlah dropdown menu jika di hover bagian movies maka akan muncul most popular, upcoming, top rated
    // saat di klik akan mengarah ke halaman baru yang menampilkan daftar film berdasarkan pilihan tsb
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          Genre
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><a href="">Action</a></li>
            <li className={styles.dropdownItem}><a href="">Comedy</a></li>
            <li className={styles.dropdownItem}><a href="">Horror</a></li>
            <li className={styles.dropdownItem}><a href="">Romance</a></li>
            <li className={styles.dropdownItem}><a href="">Fiction</a></li>
            <li className={styles.dropdownItem}><a href="">Adventure</a></li>  
            <li className={styles.dropdownItem}><a href="">Thriller</a></li>
            <li className={styles.dropdownItem}><a href="">Animation</a></li>
          </ul>
        </li>
        <li className={styles.navItem}> 
          Movies
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}><a href="">Most Popular</a></li>
            <li className={styles.dropdownItem}><a href="">Upcoming</a></li>
            <li className={styles.dropdownItem}><a href="">Top Rated</a></li>
          </ul>
        </li>
      </ul>
    </nav>





  );
}

export default DropdownMenu;

// useState digunakan untuk menyimpan nilai genre dan tahun yang dipilih 
// oleh pengguna dari dropdown menu.
