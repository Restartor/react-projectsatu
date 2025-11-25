
import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
            <img src="https://cdn.rafled.com/anime-icons/images/a49ba18f8665b168e2a9abe8a569e57ef70583e8941f766932ec243f88c30f23.jpg" alt="Profile picture" />
            <h2>Ini Card Component</h2>
            <p>Ini adalah paragraf dalam Card Component.</p>
        </div>
    );
}

export default Card;