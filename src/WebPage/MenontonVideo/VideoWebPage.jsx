import FooterWeb from "../../FooterNIH/FooterWeb";
import styles from "../MenontonVideo/VideoWebPage.module.css";
import { Link, useParams } from "react-router-dom";
import DropdownMenu from "../../Navigation Bar(iseng)/dropdownMenu";
import { useEffect, useState } from "react";

function VideoWebPage() {
  // mendapatkan id dari parameter url
  const { id } = useParams();
  // state untuk menyimpan data film
  const [film, setFilm] = useState(null);

  // anti inspect element dan debugger
  useEffect(() => {
    const interval = setInterval(() => {
      const mulai = performance.now();
      debugger;
      const end = performance.now();
      if (end - mulai >= 100) {
        window.location.replace("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // fetch film data dari backend database golang berdasarkan id
  useEffect(() => {
    fetch(`http://localhost:8080/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);

  return (
    <>
      <div>
        <DropdownMenu />
        <div className={styles.webcontainer}>
          <h2 className={styles.masalah}>
            📢Jika mengalami masalah,gangguan maupun buffering baca{" "}
            <Link to="">Bantuan</Link> untuk mengalami masalah yang dialami.{" "}
            <br />
            Diskusi Film/Series maupun Request atau komplain ke{" "}
            <a href="https://discord.com/">Discord SanFilms</a>
            <br /> SELALU GUNAKAN BROWSER CHROME / SAFARI AGAR TIDAK TERJADI
            MASALAH PADA SAAT MENONTON VIDEO.
          </h2>
          <div className={styles.videoFilm}>
            {!film && <p>Loading video...</p>}

            {film && (
              <iframe
                key={id}
                className={styles.videoFrame}
                src={film.videoLink}
                allow="fullscreen; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
        <span className={styles.deskripsiFilm}>
          {!film && <p>Loading description...</p>}

          {film && <p>{film.deskripsi}</p>}
        </span>

        <FooterWeb />
      </div>
    </>
  );
}

export default VideoWebPage;
