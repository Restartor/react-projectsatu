import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Genre.module.css';
import ActionGenre from './ActionGenre';
import ComedyGenre from './ComedyGenre';
import HorrorGenre from './HorrorGenre';
import RomanceGenre from './RomanceGenre';
import FictionGenre from './FictionGenre';
import AdventureGenre from './AdventureGenre';
import ThrillerGenre from './ThrillerGenre';
import AnimationGenre from './AnimationGenre';
import Error404 from '../ErrNotFound.jsx';


const genreComponents ={
    action: ActionGenre,
    comedy: ComedyGenre,
    horror: HorrorGenre,
    romance: RomanceGenre,
    fiction: FictionGenre,
    adventure: AdventureGenre,
    thriller: ThrillerGenre,
    animation: AnimationGenre,
};


function GenrePage() {
    const { genre } = useParams();
    const key = typeof genre === 'string' ? genre.toLowerCase() : '';
    const GenreComponent = genreComponents[key] || null;

    return GenreComponent ? <GenreComponent /> : <Error404 />;
}

export default GenrePage;