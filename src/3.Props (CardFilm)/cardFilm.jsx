import React, { useEffect, useState } from "react";
import styles from "./cardFilm.module.css";
import { useNavigate } from "react-router-dom";

function CardFilm({ id }) {
  const navigate = useNavigate();
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(true);

  const openVideo = () => {
    navigate(`/movie/${id}`);
  };
  const apiUrl = `http://localhost:8080/api/films/${id}`;

useEffect(() => {
  fetch(apiUrl)
    .then(res => res.json())
    .then (data => {setFilm(data); setLoading(false);})
  },[id]);

if (loading) {
  return <div className={styles.cardFilm}>Loading...</div>;
} 

  return (
    <div className={styles.cardFilm} onClick={openVideo}>
      <img src={film.gambar} alt={film.judul} />
      <h2>{film.judul}</h2>
      <p className={styles.tahun}>{film.tahun}</p>
      <div className={styles.genre}>
        {film.genre?.map((g, i) => (
          <span key={i}>{ g }</span>
        ))}
      </div>
    </div>
  );
}

export default CardFilm;
