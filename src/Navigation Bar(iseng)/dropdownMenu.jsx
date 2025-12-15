import React, {useState} from "react";
import styles from './dropdownMenu.module.css';

function DropdownMenu() {




  return (
    <div className={styles.dropdownMenuContainer}>
      <label htmlFor="genre">Pilih Genre Film:</label>
      <div className={styles.dropdownMenuWrapper}>
        <select id="genre" name="genre" className={styles.dropdownMenuSelect}>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="fiction">Fiction</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="animation">Animation</option>
        </select>
        
        <label htmlFor="tahun">Pilih Tahun Film:</label>
        <select id="tahun" name="tahun" className={styles.dropdownMenuSelect}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default DropdownMenu;

// useState digunakan untuk menyimpan nilai genre dan tahun yang dipilih 
// oleh pengguna dari dropdown menu.
