import Card from "./../1.Card Components/Card.jsx";
import React from "react";
import PropTypes from "prop-types";
import styles from "./cardFilm.module.css";
import { useNavigate } from "react-router-dom";

function CardFilm({ id, gambar, judul, tahun, deskripsi, genre }) {
  const navigate = useNavigate();

  const openVideo = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.cardFilm} onClick={openVideo}>
      <img src={gambar} alt={judul} />
      <h2>{judul}</h2>
      <p className={styles.tahun}>{tahun}</p>
      <div className={styles.genre}>
        {genre.map((g, i) => (
          <span key={i}>{g}</span>
        ))}
      </div>
    </div>
  );
}

export default CardFilm;
