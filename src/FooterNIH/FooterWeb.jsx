import icon from "./../ASSET NEGARA/webicon.png";
import { Link } from "react-router-dom";
import styles from "./FooterWeb.module.css";

function FooterWeb() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.bagianKiriFooterLogo}>
        <img src={icon} alt="Web icon Footer" />
        <p>
          Penjelasan SanFilms adalah platform streaming yang menyediakan
          berbagai film dan serial original dari berbagai jaringan dan kategori.
        </p>
      </div>
      <div className={styles.navigasikategorifooter}>
        <div className={styles.IbuKategory}>
          <h3>Original Series</h3>
          <ul>
            <li>
              <Link to="/network/Netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/network/AmazonPrime">Amazon Prime</Link>
            </li>
            <li>
              <Link to="/network/DisneyPlus">Disney+</Link>
            </li>
            <li>
              <Link to="/network/HBO">HBO</Link>
            </li>
          </ul>
        </div>
        <div className={styles.IbuKategory}>
          <h3>Category</h3>
          <ul>
            <li>
              <Link to="/films/category/Action">Action</Link>
            </li>
            <li>
              <Link to="/films/category/Comedy">Comedy</Link>
            </li>
            <li>
              <Link to="/films/category/Drama">Drama</Link>
            </li>
            <li>
              <Link to="/films/category/Horror">Horror</Link>
            </li>
            <li>
              <Link to="/films/category/Romance">Romance</Link>
            </li>
            <li>
              <Link to="/films/category/Sci-fi">Sci-fi</Link>
            </li>
            <li>
              <Link to="/films/category/Thriller">Thriller</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.barisfooter}>
        <hr className={styles.pemotong} />
        <p>© 2025 SanFilms. All rights reserved.</p>

        <div className={styles.sosialmediafooter}>
          <ul>
            <li>
              <Link to="/help">Bantuan</Link>
            </li>
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default FooterWeb;

// buatlah footer yang memuat logo di kiri dan penjelasan webpage

//  di kanannya terdapat Original series yang dibawahnya terdapat navigasi seperti Netflix, Amazon prime, Disney+, HBO
// dan juga category yang berisi Action, Comedy, Drama, Horror, Romance, Sci-fi, Thriller
// lalu baris ===============
// dibawahnya lagi terdapat copyright © 2025 SanFilms. All rights reserved.
// lalu disamping kanannya terdapat <a> ke bantuan, dan sosial media seperti facebook, twitter, instagram
